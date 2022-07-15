require('dotenv').config();
const jwt = require('jsonwebtoken');
const sendError = require('./sendError');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return sendError(401, 'Token not found');
    }

    try {
        /* Pedimos para que a bilioteca de JWT valide o token */
        const payload = jwt.verify(token, JWT_SECRET);
        if (!payload) {
            return sendError(401, 'Expired or invalid token');
        }
        req.token = payload;
    } catch (err) {
        return null;
    }
    next();
};
