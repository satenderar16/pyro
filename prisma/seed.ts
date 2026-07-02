import prisma from "../src/config/prisma";
import { orderStatus } from "../prisma/generated/client";
import { currencyType, optionType, paymentType,userType } from "./generated";

import { ALL_PERMISSION_KEYS, getRolePermissions } from "../src/utils/permissions";

/**
 * FIXED NORMALIZATION:
 * base unit for WEIGHT = gram (g)
 * price_per_base_unit = input_price / (input_value * to_base_factor)
 */
function calcPricePerBaseUnit(
  inputPrice: number,
  inputValue: number,
  toBaseFactor: number
) {
  return inputPrice / (inputValue * toBaseFactor);
}

 function calcCashAmount(
  total: number,
  discount: number,
  cashless:number,
  payment: paymentType
) {
  const final = total - discount;

  if (payment === "CASH") return final;
  if (payment === "CASHLESS") return 0;
  return  total - cashless; // HYBRID assumption: 50-50 split
}

async function main() {
  console.log("🌱 Full system seed starting...");

  const permissionKeys  = ALL_PERMISSION_KEYS;


  await prisma.permission.createMany({
    data: permissionKeys.map((permission_key) => ({
      permission_key,
    })),
    skipDuplicates: true,
  });




  const allDbPermissions = await prisma.permission.findMany();

  const company = await prisma.company.create({
    data: {
      name: "Demo Store",
      contact: "+91 9999999999",
      address: "Delhi, India",
    },
  });

//  password:12345678
  const password =
   "$2b$10$fFdHKroAJjxfZ7sd7C2z2ulgFRYcyhA6E1fy7KakX2cKOWhGXG.QS";

  const owner = await prisma.users.create({
    data: {
      name: "Owner",
      username: "owner",
      email: "owner@example.com",
      password,
    },
  });

  const admin = await prisma.users.create({
    data: {
      name: "Admin",
      username: "admin",
      email: "admin@example.com",
      password,
    },
  });

  const staff1 = await prisma.users.create({
    data: {
      name: "Staff One",
      username: "staff1",
      email: "staff1@example.com",
      password,
    },
  });

  const staff2 = await prisma.users.create({
    data: {
      name: "Staff Two",
      username: "staff2",
      email: "staff2@example.com",
      password,
    },
  });

  // ====================================================
  // 4. ROLES
  // ====================================================
  const ownerRole = await prisma.companyRole.create({
    data: {
      company_id: company.id,
      name: "OWNER",
      is_system: true,
      active:true,
      user_type:userType.OWNER
    },
  });

  const adminRole = await prisma.companyRole.create({
    data: {
      company_id: company.id,
      name: "ADMIN",
      is_system: true,
      active:true,
      user_type:userType.ADMIN
    },
  });

  const staffRole = await prisma.companyRole.create({
    data: {
      company_id: company.id,
      name: "STAFF",
      is_system: true,
      active:true,
      user_type:userType.STAFF
    },
  });

  // ====================================================
  // 5. ROLE PERMISSIONS
  // ====================================================

  // const ownerPermission = permissions;

  // const adminPermission = permissions.filter(
  //   (p) =>
  //     !["admin.create", "admin.update", "admin.delete"].includes(
  //       p.permission_key
  //     )
  // );

  // const staffPermission = permissions.filter((p) =>
  //   [
  //     "orders.read",
  //     "orders.create",
  //     "orders.update",
  //     "items.read",
  //     "categories.read",
  //     "options.read",
  //   ].includes(p.permission_key)
  // );
// 2. Get the specific permission lists for each role
const rolePermissionsList = getRolePermissions(allDbPermissions);
const { ownerPermissions, adminPermissions, staffPermissions } = rolePermissionsList;

  await prisma.rolePermission.createMany({
    data: ownerPermissions.map((p) => ({
      role_id: ownerRole.id,
      permission_id: p.id,
    })),
  });

  await prisma.rolePermission.createMany({
    data: adminPermissions.map((p) => ({
      role_id: adminRole.id,
      permission_id: p.id,
    })),
  });

  await prisma.rolePermission.createMany({
    data: staffPermissions.map((p) => ({
      role_id: staffRole.id,
      permission_id: p.id,
    })),
  });

  // ====================================================
  // 6. COMPANY USERS (4 USERS)
  // ====================================================
  await prisma.companyUser.createMany({
    data: [
      {
        company_id: company.id,
        user_id: owner.id,
        role_id: ownerRole.id,
        user_type: userType.OWNER,
        verified_user: true,
        verified_by: owner.id,
        verified_at: new Date(),
        created_by:owner.id,
        updated_by:owner.id
      },
      {
        company_id: company.id,
        user_id: admin.id,
        role_id: adminRole.id,
        user_type: userType.ADMIN,
        verified_user: true,
        verified_by: owner.id,
        verified_at: new Date(),
         created_by:owner.id,
        updated_by:owner.id
      },
      {
        company_id: company.id,
        user_id: staff1.id,
        role_id: staffRole.id,
        user_type: userType.STAFF,
        verified_user: true,
        verified_by: owner.id,
        verified_at: new Date(),
        created_by:owner.id,
        updated_by:owner.id
      },
      {
        company_id: company.id,
        user_id: staff2.id,
        role_id: staffRole.id,
        user_type: userType.STAFF,
        verified_user: true,
        verified_by: owner.id,
        verified_at: new Date(),
         created_by:owner.id,
        updated_by:owner.id
      },
    ],
  });

  // ====================================================
  // 7. UNIT CLASS
  // ====================================================
  const weight = await prisma.unitClass.create({
    data: {
      name: "WEIGHT",
      base_unit_name: "gram",
      base_unit_symbol: "g",
    },
  });

  const volume = await prisma.unitClass.create({
    data: {
      name: "VOLUME",
      base_unit_name: "milliliter",
      base_unit_symbol: "ml",
    },
  });

  // ====================================================
  // 8. UNITS
  // ====================================================
  const g = await prisma.units.create({
    data: {
      class_id: weight.id,
      name: "gram",
      symbol: "g",
      to_base_factor: 1,
    },
  });

  const kg = await prisma.units.create({
    data: {
      class_id: weight.id,
      name: "kilogram",
      symbol: "kg",
      to_base_factor: 1000,
    },
  });

  const ml = await prisma.units.create({
    data: {
      class_id: volume.id,
      name: "milliliter",
      symbol: "ml",
      to_base_factor: 1,
    },
  });

  const l = await prisma.units.create({
    data: {
      class_id: volume.id,
      name: "liter",
      symbol: "l",
      to_base_factor: 1000,
    },
  });

  // ====================================================
  // 9. CATEGORIES (4)
  // ====================================================
  const grocery = await prisma.categories.create({
    data: {
      name: "Grocery",
      company_id: company.id,
      created_by: owner.id,
      updated_by: owner.id,
    },
  });

  const beverages = await prisma.categories.create({
    data: {
      name: "Beverages",
      company_id: company.id,
      created_by: owner.id,
      updated_by: owner.id,
    },
  });

  const fruits = await prisma.categories.create({
    data: {
      name: "Fruits",
      company_id: company.id,
      created_by: owner.id,
      updated_by: owner.id,
    },
  });

  const snacks = await prisma.categories.create({
    data: {
      name: "Snacks",
      company_id: company.id,
      created_by: owner.id,
      updated_by: owner.id,
    },
  });

  // ====================================================
  // 10. ITEMS (5 each category = 20 items)
  // ====================================================

  const rice = await prisma.items.create({
    data: { name: "Rice", cat_id: grocery.id, created_by: owner.id, updated_by: owner.id,company_id:company.id},
  });

  const wheat = await prisma.items.create({
    data: { name: "Wheat", cat_id: grocery.id, created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const sugar = await prisma.items.create({
    data: { name: "Sugar", cat_id: grocery.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const salt = await prisma.items.create({
    data: { name: "Salt", cat_id: grocery.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const dal = await prisma.items.create({
    data: { name: "Lentils", cat_id: grocery.id,created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const milk = await prisma.items.create({
    data: { name: "Milk", cat_id: beverages.id,  created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const tea = await prisma.items.create({
    data: { name: "Tea", cat_id: beverages.id, created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const coffee = await prisma.items.create({
    data: { name: "Coffee", cat_id: beverages.id, created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const juice = await prisma.items.create({
    data: { name: "Juice", cat_id: beverages.id, created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const soda = await prisma.items.create({
    data: { name: "Soda", cat_id: beverages.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const apple = await prisma.items.create({
    data: { name: "Apple", cat_id: fruits.id,  created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const banana = await prisma.items.create({
    data: { name: "Banana", cat_id: fruits.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const mango = await prisma.items.create({
    data: { name: "Mango", cat_id: fruits.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const orange = await prisma.items.create({
    data: { name: "Orange", cat_id: fruits.id,  created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const grapes = await prisma.items.create({
    data: { name: "Grapes", cat_id: fruits.id, created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  const chips = await prisma.items.create({
    data: { name: "Chips", cat_id: snacks.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const biscuits = await prisma.items.create({
    data: { name: "Biscuits", cat_id: snacks.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const namkeen = await prisma.items.create({
    data: { name: "Namkeen", cat_id: snacks.id,  created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const chocolate = await prisma.items.create({
    data: { name: "Chocolate", cat_id: snacks.id,created_by: owner.id, updated_by: owner.id,company_id:company.id },
  });

  const popcorn = await prisma.items.create({
    data: { name: "Popcorn", cat_id: snacks.id, created_by: owner.id, updated_by: owner.id ,company_id:company.id},
  });

  // ====================================================
  // 11. OPTIONS (FIXED NORMALIZATION)
  // ====================================================
const optionData = [
  // Grocery
  { item: rice, name: "Rice 1kg", price: 80, value: 1, unit: kg },
  { item: wheat, name: "Wheat 1kg", price: 50, value: 1, unit: kg },
  { item: sugar, name: "Sugar 1kg", price: 45, value: 1, unit: kg },
  { item: salt, name: "Salt 1kg", price: 20, value: 1, unit: kg },
  { item: dal, name: "Lentils 1kg", price: 110, value: 1, unit: kg },

  // Beverages
  { item: milk, name: "Milk 1L", price: 60, value: 1, unit: l },
  { item: tea, name: "Tea 250g", price: 140, value: 250, unit: g },
  { item: coffee, name: "Coffee 200g", price: 180, value: 200, unit: g },
  { item: juice, name: "Juice 1L", price: 120, value: 1, unit: l },
  { item: soda, name: "Soda 500ml", price: 40, value: 500, unit: ml },

  // Fruits
  { item: apple, name: "Apple 1kg", price: 180, value: 1, unit: kg },
  { item: banana, name: "Banana 1kg", price: 60, value: 1, unit: kg },
  { item: mango, name: "Mango 1kg", price: 150, value: 1, unit: kg },
  { item: orange, name: "Orange 1kg", price: 90, value: 1, unit: kg },
  { item: grapes, name: "Grapes 1kg", price: 120, value: 1, unit: kg },

  // Snacks
  { item: chips, name: "Chips 200g", price: 50, value: 200, unit: g },
  { item: biscuits, name: "Biscuits 250g", price: 40, value: 250, unit: g },
  { item: namkeen, name: "Namkeen 500g", price: 90, value: 500, unit: g },
  { item: chocolate, name: "Chocolate 100g", price: 80, value: 100, unit: g },
  { item: popcorn, name: "Popcorn 250g", price: 70, value: 250, unit: g },
];

for (const opt of optionData) {
  await prisma.options.create({
    data: {
      name: opt.name,
      input_price: opt.price,
      input_value: opt.value,
      unit_id: opt.unit.id,
      item_id: opt.item.id,
      min_sell_quantity:1,
      min_sell_unit_id:opt.unit.id,
      currency: currencyType.INR,
      price_per_base_unit: calcPricePerBaseUnit(
        opt.price,
        opt.value,
       Number( opt.unit.to_base_factor)
      ),
      type:optionType.LOOSE,
      created_by: owner.id,
      updated_by: owner.id,
    },
  });
}
  const options = await prisma.options.findMany();

  // ===============================
// ORDER 1 - CASH
// ===============================
const order1 = await prisma.orders.create({
  data: {
    order_name: "Order #1",
    created_by: owner.id,
    status_changed_by: owner.id,
    company_id: company.id,
    status: orderStatus.PENDING,
    payment_type: paymentType.CASH,
    discount: 10,

    cash_amount: 0, // will update later
  },
});

// ===============================
// ORDER OPTIONS (5 items)
// ===============================
const order1Options = options.slice(0, 5);

let total1 = 0;

await Promise.all(
  order1Options.map(async (opt) => {
    const qty = 2;
    const base_factor = await prisma.units.findFirst({where:{id:opt.unit_id}});
    

    const lineTotal = Number(opt.price_per_base_unit) * qty * Number(base_factor?.to_base_factor ?? 1);

    total1 += lineTotal;

    await prisma.orderOptions.create({
      data: {
        order_id: order1.id,
        option_id: opt.id,
        sell_unit_id: opt.unit_id,
        sell_quantity: qty,
        price_per_base_unit: opt.price_per_base_unit,
        created_by: owner.id,
        updated_by: owner.id,
        currency:opt.currency
      
      },
    });
  })
);

await prisma.orders.update({
  where: { id: order1.id },
  data: {
    cash_amount: calcCashAmount(total1, 10, 0,paymentType.CASH),
  },
});

// ===============================
// ORDER 2 - CASHLESS
// ===============================
const order2 = await prisma.orders.create({
  data: {
    order_name: "Order #2",
    created_by: admin.id,
    status_changed_by: admin.id,
      company_id: company.id,
    status: orderStatus.FULFILLED,
    payment_type: paymentType.CASHLESS,
    discount: 0,
    cash_amount: 0,
  },
});

const order2Options = options.slice(5, 10);

let total2 = 0;

await Promise.all(
  order2Options.map(async (opt) => {
    const qty = 1;

    const base_factor = await prisma.units.findFirst({where:{id:opt.unit_id}});
    const lineTotal = Number(opt.price_per_base_unit) * qty * Number(base_factor?.to_base_factor);
    total2 += lineTotal;

    await prisma.orderOptions.create({
      data: {
        order_id: order2.id,
        option_id: opt.id,
        sell_unit_id: opt.unit_id,
        sell_quantity: qty,
        price_per_base_unit: opt.price_per_base_unit,
        created_by: admin.id,
        updated_by: admin.id,
        currency:opt.currency
      },
    });
  })
);

await prisma.orders.update({
  where: { id: order2.id },
  data: {
    cash_amount: calcCashAmount(total2, 0, total2,paymentType.CASHLESS),
  },
});

// ===============================
// ORDER 3 - HYBRID + DISCOUNT
// ===============================
const order3 = await prisma.orders.create({
  data: {
    order_name: "Order #3",
    created_by: owner.id,
    status_changed_by: owner.id,
       company_id: company.id,
    status: orderStatus.PENDING,
    payment_type: paymentType.HYBRID,
    discount: 20,
    cash_amount: 0,
  },
});

const order3Options = options.slice(10, 15);

let total3 = 0;

await Promise.all(
  order3Options.map(async (opt) => {
    const qty = 3;
    const base_factor = await prisma.units.findFirst({where:{id:opt.unit_id}});

     const lineTotal = Number(opt.price_per_base_unit) * qty * Number(base_factor?.to_base_factor);


    total3 += lineTotal;

    await prisma.orderOptions.create({
      data: {
        order_id: order3.id,
        option_id: opt.id,
        sell_unit_id: opt.unit_id,
        sell_quantity: qty,
        price_per_base_unit: opt.price_per_base_unit,
        created_by: owner.id,
        updated_by: owner.id,
        currency:opt.currency
      },
    });
  })
);

await prisma.orders.update({
  where: { id: order3.id },
  data: {
    cash_amount: calcCashAmount(total3, 20,10 ,paymentType.HYBRID),
  },
});

// ===============================
// ORDER 4 - CASH
// ===============================
const order4 = await prisma.orders.create({
  data: {
    order_name: "Order #4",
    created_by: admin.id,
    status_changed_by: admin.id,
      company_id: company.id,
    status: orderStatus.PENDING,
    payment_type: paymentType.CASH,
    discount: 5,
    cash_amount: 0,
  },
});

const order4Options = options.slice(0, 5);

let total4 = 0;

await Promise.all(
  order4Options.map(async (opt) => {
    const qty = 2;

    const base_factor = await prisma.units.findFirst({where:{id:opt.unit_id}});

     const lineTotal = Number(opt.price_per_base_unit) * qty * Number(base_factor?.to_base_factor);

    total4 += lineTotal;

    await prisma.orderOptions.create({
      data: {
        order_id: order4.id,
        option_id: opt.id,
        sell_unit_id: opt.unit_id,
        sell_quantity: qty,
        price_per_base_unit: opt.price_per_base_unit,
        created_by: admin.id,
        updated_by: admin.id,
        currency:opt.currency
      },
    });
  })
);

await prisma.orders.update({
  where: { id: order4.id },
  data: {
    cash_amount: calcCashAmount(total4, 5,0, paymentType.CASH),
  },
});

// ===============================
// ORDER 5 - HYBRID
// ===============================
const order5 = await prisma.orders.create({
  data: {
    order_name: "Order #5",
    created_by: owner.id,
    status_changed_by: owner.id,
      company_id: company.id,
    status: orderStatus.FULFILLED,
    payment_type: paymentType.HYBRID,
    discount: 15,
    cash_amount: 0,
  },
});

const order5Options = options.slice(5, 10);

let total5 = 0;

await Promise.all(
  order5Options.map(async (opt) => {
    const qty = 1;

   const base_factor = await prisma.units.findFirst({where:{id:opt.unit_id}});

 const lineTotal = Number(opt.price_per_base_unit) * qty * Number(base_factor?.to_base_factor);

    total5 += lineTotal;

    await prisma.orderOptions.create({
      data: {
        order_id: order5.id,
        option_id: opt.id,
        sell_unit_id: opt.unit_id,
        sell_quantity: qty,
        price_per_base_unit: opt.price_per_base_unit,
        created_by: owner.id,
        updated_by: owner.id,
        currency:opt.currency
      },
    });
  })
);

await prisma.orders.update({
  where: { id: order5.id },
  data: {
    cash_amount: calcCashAmount(total5, 15,4, paymentType.HYBRID),
  },
});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });