import prisma from "../src/config/prisma";
import { orderStatus } from "../src/generated/client";
import { currencyType, itemType, paymentType } from "./generated";

async function main() {
  // ======================
  // USERS
  // ======================
  const users = await Promise.all([
    prisma.users.create({
      data: {
        name: "Admin User",
        username: "admin",
        email: "admin@example.com",
        password: "hashed_pw",
        business_name: "My Store",
      },
    }),
    prisma.users.create({
      data: {
        name: "John Doe",
        username: "john",
        email: "john@example.com",
        password: "hashed_pw",
        business_name: "John Traders",
      },
    }),
    prisma.users.create({
      data: {
        name: "Sarah Khan",
        username: "sarah",
        email: "sarah@example.com",
        password: "hashed_pw",
        business_name: "Fresh Mart",
      },
    }),
    prisma.users.create({
      data: {
        name: "Mike Ross",
        username: "mike",
        email: "mike@example.com",
        password: "hashed_pw",
        business_name: "Quick Shop",
      },
    }),
    prisma.users.create({
      data: {
        name: "Anna Lee",
        username: "anna",
        email: "anna@example.com",
        password: "hashed_pw",
        business_name: "Daily Needs",
      },
    }),
  ]);

  const admin = users[0];
  const john = users[1];
  const sarah = users[2];
  const mike = users[3];
  const anna = users[4];

  // ======================
  // UNIT CLASSES
  // ======================
  const weightClass = await prisma.unit_classes.create({
    data: { name: "WEIGHT" },
  });

  const volumeClass = await prisma.unit_classes.create({
    data: { name: "VOLUME" },
  });

  const countClass = await prisma.unit_classes.create({
    data: { name: "COUNT" },
  });

  // ======================
  // UNITS
  // ======================
  const gram = await prisma.units.create({
    data: {
      name: "gram",
      symbol: "g",
      class_id: weightClass.id,
      to_base_factor: 1,
      is_base: true,
    },
  });

  const kilogram = await prisma.units.create({
    data: {
      name: "kilogram",
      symbol: "kg",
      class_id: weightClass.id,
      to_base_factor: 1000,
      is_base: false,
    },
  });

  const milliliter = await prisma.units.create({
    data: {
      name: "milliliter",
      symbol: "ml",
      class_id: volumeClass.id,
      to_base_factor: 1,
      is_base: true,
    },
  });

  const liter = await prisma.units.create({
    data: {
      name: "liter",
      symbol: "L",
      class_id: volumeClass.id,
      to_base_factor: 1000,
      is_base: false,
    },
  });

  const piece = await prisma.units.create({
    data: {
      name: "piece",
      symbol: "pc",
      class_id: countClass.id,
      to_base_factor: 1,
      is_base: true,
    },
  });

  // ======================
  // CATEGORIES
  // ======================
  const fruits = await prisma.categories.create({
    data: {
      name: "Fruits",
      user_id: admin.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  const dairy = await prisma.categories.create({
    data: {
      name: "Dairy",
      user_id: john.id,
      created_by: john.id,
      updated_by: john.id,
    },
  });

  const snacks = await prisma.categories.create({
    data: {
      name: "Snacks",
      user_id: sarah.id,
      created_by: sarah.id,
      updated_by: sarah.id,
    },
  });

  const beverages = await prisma.categories.create({
    data: {
      name: "Beverages",
      user_id: mike.id,
      created_by: mike.id,
      updated_by: mike.id,
    },
  });

  const vegetables = await prisma.categories.create({
    data: {
      name: "Vegetables",
      user_id: admin.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  // ======================
  // ITEMS
  // ======================
  const apple = await prisma.items.create({
    data: {
      name: "Apple",
      type: itemType.PACKAGE,
      cat_id: fruits.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  const banana = await prisma.items.create({
    data: {
      name: "Banana",
      type: itemType.LOOSE,
      cat_id: fruits.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  const milk = await prisma.items.create({
    data: {
      name: "Milk",
      type: itemType.PACKAGE,
      cat_id: dairy.id,
      created_by: john.id,
      updated_by: john.id,
    },
  });

  const chips = await prisma.items.create({
    data: {
      name: "Chips",
      type: itemType.PACKAGE,
      cat_id: snacks.id,
      created_by: sarah.id,
      updated_by: sarah.id,
    },
  });

  const coke = await prisma.items.create({
    data: {
      name: "Coke",
      type: itemType.PACKAGE,
      cat_id: beverages.id,
      created_by: mike.id,
      updated_by: mike.id,
    },
  });

  // ======================
  // OPTIONS (UPDATED)
  // ======================
  const appleOpt = await prisma.options.create({
    data: {
      name: "Apple 1kg Pack",
      currency: currencyType.INR,
      unit_id: kilogram.id,
      price_per_base_unit: 0.12, // 120 / 1000
      item_id: apple.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  const bananaOpt = await prisma.options.create({
    data: {
      name: "Banana 1kg",
      currency: currencyType.INR,
      unit_id: kilogram.id,
      price_per_base_unit: 0.06,
      item_id: banana.id,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  const milkOpt = await prisma.options.create({
    data: {
      name: "Milk 1L",
      currency: currencyType.INR,
      unit_id: liter.id,
      price_per_base_unit: 0.055, // 55 / 1000 ml
      item_id: milk.id,
      created_by: john.id,
      updated_by: john.id,
    },
  });

  const chipsOpt = await prisma.options.create({
    data: {
      name: "Chips Pack",
      currency: currencyType.INR,
      unit_id: piece.id,
      price_per_base_unit: 20,
      item_id: chips.id,
      created_by: sarah.id,
      updated_by: sarah.id,
    },
  });

  const cokeOpt = await prisma.options.create({
    data: {
      name: "Coke 500ml",
      currency: currencyType.INR,
      unit_id: milliliter.id,
      price_per_base_unit: 0.08,
      item_id: coke.id,
      created_by: mike.id,
      updated_by: mike.id,
    },
  });

  // ======================
  // ORDERS
  // ======================
  const order1 = await prisma.orders.create({
    data: {
      order_name: "Order 1",
      status: orderStatus.PENDING,
      payment_type: paymentType.CASH,
      cash_amount: 200,
      created_by: admin.id,
      status_changed_by: admin.id,
      user_id: admin.id,
    },
  });

  const order2 = await prisma.orders.create({
    data: {
      order_name: "Order 2",
      status: orderStatus.FULFILLED,
      payment_type: paymentType.CASHLESS,
      cash_amount: 150,
      created_by: john.id,
      status_changed_by: john.id,
      user_id: john.id,
    },
  });

  // ======================
  // ORDER OPTIONS (UPDATED)
  // ======================
  await prisma.orderOptions.create({
    data: {
      order_id: order1.id,
      option_id: appleOpt.id,
      unit_id: kilogram.id,
      quantity: 2.5,
      price_per_base_unit: appleOpt.price_per_base_unit,
      created_by: admin.id,
      updated_by: admin.id,
    },
  });

  await prisma.orderOptions.create({
    data: {
      order_id: order2.id,
      option_id: milkOpt.id,
      unit_id: liter.id,
      quantity: 2,
      price_per_base_unit: milkOpt.price_per_base_unit,
      created_by: john.id,
      updated_by: john.id,
    },
  });

  console.log("🌱 Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });