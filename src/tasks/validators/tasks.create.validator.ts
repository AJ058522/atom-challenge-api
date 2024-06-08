const { checkSchema } = require("express-validator");
const validators = require("./validators");

const createValidator = checkSchema(validators.createValidator);

export { createValidator };
