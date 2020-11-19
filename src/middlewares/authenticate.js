const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const config = require('../../config/index');

const AUTH_HEADER = 'Authorization';

const authenticate = async (req, res, next) => {
  try {
    const authorizationHeader = req.get(AUTH_HEADER).split(' ');
    if (authorizationHeader[0] !== 'Bearer') next(new createError.Unauthorized());
    const authToken = authorizationHeader[1];
    const decodedToken = jwt.verify(authToken, config.default.secret);
    if (decodedToken.user) {
      req.user = decodedToken.user;
      return next();
    }
    return next(new createError.Unauthorized());
  } catch (error) {
    return next(new createError.Unauthorized());
  }
};

module.exports = authenticate;
