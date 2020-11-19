// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, _) => {
  console.error(err.stack);
  return res.status(err.statusCode || 500).json({
    status: err.statusCode || 500,
    message: err.message
  });
};

export default errorMiddleware;
