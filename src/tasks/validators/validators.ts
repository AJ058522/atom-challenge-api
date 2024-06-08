const nameLength = { min: 6, max: 191 };

const createValidator = {
  title: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  description: {
    isLength: {
      errorMessage: `min length shoud be ${nameLength.min}, max length shoud be ${nameLength.max}`,
      options: { min: nameLength.min, max: nameLength.max },
    },
    trim: true,
  },
  userId: {
    errorMessage: `must be a valid id`,
    trim: true,
  },
};

const updateValidator = {
  ...createValidator,
  taskId: {
    in: ["params", "query"],
    errorMessage: `must be a valid id`,
    trim: true,
  },
  status: {
    errorMessage: `must be a valid status`,
    trim: true,
  },
};

export { createValidator, updateValidator };
