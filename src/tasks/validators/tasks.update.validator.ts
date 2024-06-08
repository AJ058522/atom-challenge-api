const { checkSchema } = require("express-validator");
const validators = require("./validators");

const updateValidator = checkSchema(validators.updateValidator);

export { updateValidator };
