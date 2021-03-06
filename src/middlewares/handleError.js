const handleError = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
    return next();
  } catch (error) {
    return next(error);
  }
};

export default handleError;
