const { checkSchema } = require("express-validator");

const loginValidator = checkSchema({
  email: {
    errorMessage: `must be a valid email`,
    isEmail: true,
    trim: true,
  },
});

export { loginValidator };
