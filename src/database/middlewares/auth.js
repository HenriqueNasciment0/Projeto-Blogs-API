// middlewares/auth.js
const jwt = require('jsonwebtoken');
const sendError = require('./sendError');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return sendError(401, 'Token not found');
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (payload.error) return next(payload.error);

    req.token = payload;

    return next();
  } catch (err) {
    return next(sendError(401, 'Expired or invalid token'));
  }
};
