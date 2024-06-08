const nameLength = { min: 6, max: 191 };
const passwordLength = { min: 11, max: 128 };

const createValidator = {
  full_name: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  email: {
    errorMessage: `must be a valid email`,
    isEmail: true,
    trim: true,
  },
  password: {
    isLength: {
      errorMessage: `min length shoud be ${passwordLength.min}, max length shoud be ${passwordLength.max}`,
      options: { min: passwordLength.min, max: passwordLength.max },
    },
    trim: true,
  },
  confirm_password: {
    isLength: {
      errorMessage: `min length shoud be ${passwordLength.min}, max length shoud be ${passwordLength.max}`,
      options: { min: passwordLength.min, max: passwordLength.max },
    },
    trim: true,
  },
};

const updateValidator = {
  full_name: createValidator.full_name,
  email: createValidator.email,
  userId: {
    in: ["params", "query"],
    isMongoId: true,
    errorMessage: `must be a valid id`,
    trim: true,
  },
};

export { createValidator, updateValidator };
