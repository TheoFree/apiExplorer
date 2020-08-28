module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {

        PRODUCT_CREATED: 'product created successfully',
        PRODUCT_FETCHED: 'product fetched successfully',
        PRODUCT_NOT_FOUND: 'product not found',
        PRODUCT_UPDATED:'product updated successfully',
        PRODUCT_DELETED:'product deleted successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup successful',
        LOGIN_SUCCESS: 'Login Successfull',
        USER_NOT_FOUND: 'User not found',
        INCORRECT_PASSWORD: 'Incorrect Password Entered',
        DUPLICATE_EMAIL: 'Duplicate user email'
    },
    requestValidationMessage: {
        BAD_REQUEST: "Invalid Fields",
        TOKEN_MISSING: "Token missing from header"
    },
    databaseMessage: {
        INVALID_ID:"invalid product ID"
    }
}