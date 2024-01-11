// const asyncHandler = (fun) => () => {};
// Higher Order Function : A function that returns a function or takes a function as an argument
// this is a middleware function that will be used to handle async functions

/*
const asyncHandler = (fun) => async (req, res, next) => {
    try {
        await fun(req, res, next);
    } catch (error) {
        res
        .status(error.code || 500)
        .json({ message: error.message, success: false });
    }
};
*/

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
