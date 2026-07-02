// src/utils/permissions.js


export interface Permission {
  id: number; 
  permission_key: string;
}
// 1. Base permission keys
export  const PERMISSIONS = {
  COMPANY: { READ: "company.read", UPDATE: "company.update", DELETE:"company.delete"},
  ADMIN: { CREATE: "admin.create", UPDATE: "admin.update", DELETE: "admin.delete", READ: "admin.read" },
  USER: { CREATE: "user.create", READ: "user.read", UPDATE: "user.update", DELETE: "user.delete" },
  ROLES: { CREATE: "roles.create", READ: "roles.read", UPDATE: "roles.update", DELETE: "roles.delete" },
  INVITE: { CREATE: "invite.create", READ: "invite.read", UPDATE: "invite.update", DELETE: "invite.delete" },
  CATEGORIES: { CREATE: "categories.create", READ: "categories.read", UPDATE: "categories.update", DELETE: "categories.delete" },
  ITEMS: { CREATE: "items.create", READ: "items.read", UPDATE: "items.update", DELETE: "items.delete" },
  OPTIONS: { CREATE: "options.create", READ: "options.read", UPDATE: "options.update", DELETE: "options.delete" },
  ORDERS: { CREATE: "orders.create", READ: "orders.read", UPDATE: "orders.update", DELETE: "orders.delete" },
};

// 2. Role rule definitions
const EXCLUDED_ADMIN_PERMISSIONS: string[] = [
  PERMISSIONS.COMPANY.UPDATE,
  PERMISSIONS.COMPANY.DELETE,
  PERMISSIONS.ADMIN.CREATE,
  PERMISSIONS.ADMIN.UPDATE,
  PERMISSIONS.ADMIN.DELETE,
];

const STAFF_ALLOWED_PERMISSIONS: string[] = [
  // Categories
  PERMISSIONS.CATEGORIES.CREATE,
  PERMISSIONS.CATEGORIES.READ,
  PERMISSIONS.CATEGORIES.UPDATE,
  PERMISSIONS.CATEGORIES.DELETE,

  // Items
  PERMISSIONS.ITEMS.CREATE,
  PERMISSIONS.ITEMS.READ,
  PERMISSIONS.ITEMS.UPDATE,
  PERMISSIONS.ITEMS.DELETE,

  // Options
  PERMISSIONS.OPTIONS.CREATE,
  PERMISSIONS.OPTIONS.READ,
  PERMISSIONS.OPTIONS.UPDATE,
  PERMISSIONS.OPTIONS.DELETE,

  // Orders
  PERMISSIONS.ORDERS.CREATE,
  PERMISSIONS.ORDERS.READ,
  PERMISSIONS.ORDERS.UPDATE,
  PERMISSIONS.ORDERS.DELETE,
];


export const ALL_PERMISSION_KEYS = Object.values(PERMISSIONS)
  .flatMap(group => Object.values(group));


export const getRolePermissions = (userPermissions: Permission[] = []) => {
  return {
    ownerPermissions: userPermissions,
    
    adminPermissions: userPermissions.filter(
      (p) => !EXCLUDED_ADMIN_PERMISSIONS.includes(p.permission_key)
    ),
    
    staffPermissions: userPermissions.filter((p) =>
      STAFF_ALLOWED_PERMISSIONS.includes(p.permission_key)
    ),
  };
};


export const validateRolePermissions = (
  userType: string,
  permissions: Permission[]
) => {
  const {
    ownerPermissions,
    adminPermissions,
    staffPermissions,
  } = getRolePermissions(permissions);

  let allowedPermissions: Permission[] = [];

  switch (userType) {
    case "OWNER":
      allowedPermissions = ownerPermissions;
      break;

    case "ADMIN":
      allowedPermissions = adminPermissions;
      break;

    case "STAFF":
      allowedPermissions = staffPermissions;
      break;

    default:
      return {
        valid: false,
        invalidPermissions: [],
      };
  }

  const allowedKeys = new Set(
    allowedPermissions.map((p) => p.permission_key)
  );

  const invalidPermissions = permissions.filter(
    (p) => !allowedKeys.has(p.permission_key)
  );

  return {
    valid: invalidPermissions.length === 0,
    invalidPermissions,
  };
};