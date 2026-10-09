//  Let imagine am E-commerce website with 4 types of users.
// Let's do the OOP design for the same.

// This enforces usage of modern JS
// "use strict"; -> for strict mode

// CONSTANTS

const ROLE =  Object.freeze({
    CUSTOMER: "CUSTOMER",
    SELLER: "SELLER",
    ADMIN: "ADMIN",
    SUPPORT: "SUPPORT"
});

const PERMISSION = Object.freeze({
    PRODUCT_READ: "PRODUCT_READ",
    PRODUCT_CREATE: "PRODUCT_CREATE",
    PRODUCT_UPDATE_OWN: "PRODUCT_UPDATE_OWN",
    PRODUCT_UPDATE_ANY: "PRODUCT_UPDATE_ANY",
    PRODUCT_DELETE_ANY: "PRODUCT_DELETE_ANY",
    USER_MANAGE: "USER_MANAGE",
    CART_MANAGE: "CART_MANAGE",
    ORDER_CREATE: "ORDER_CREATE",
    ORDER_READ_OWN: "ORDER_READ_OWN",
    ORDER_READ_ANY: "ORDER_READ_ANY",
    SALES_READ_OWN: "SALES_READ_OWN",
});

// RBAC -> Role Based Access Control
const ROLE_PERMISSIONS = Object.freeze({
    [ROLE.CUSTOMER]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.CART_MANAGE,
        PERMISSION.ORDER_CREATE,
        PERMISSION.ORDER_READ_OWN
    ],
    [ROLE.SELLER]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.PRODUCT_CREATE,
        PERMISSION.PRODUCT_UPDATE_OWN,
        PERMISSION.SALES_READ_OWN
    ],
    [ROLE.ADMIN]: [
        Object.values(PERMISSION)
    ],
    [ROLE.SUPPORT]: [
        PERMISSION.PRODUCT_READ,
        PERMISSION.ORDER_READ_ANY,
    ]
})

// Custom error:

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends AppError {}
class AuthorizationError extends AppError {}
class NotFoundError extends AppError {}
class InsufficientError extends AppError {}

// Authorization Srevice - RBAC checks

class AuthorizationService {
    // static method for checking premissionof given user
    static hasPrermission(user, permission) {
        if (!user instanceof user) {
            return false;
        }

        const prermissions = ROLE_PERMISSIONS[user.role];
        return prermissions?.includes(permission) ?? false;
    }

    static requirePermission(user, permission) {
        if (this.hasPrermission(user, permission)) {
            throw new AuthorizationError(
                `${permission} denied for role ${user.role ?? "UNKNOWN"}` 
            );
        }
    }
    staticrequireOwnerOrPermission(user,OwnerID, resourceOwnerId, anypermission) {
        if (user.id == OwnerId && !this.hasPrermission(user, ownPermission)) {return; }
        this.requirePermission(user, anyPermission); 
    }
}
// Abstract User

