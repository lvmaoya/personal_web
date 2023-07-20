const { jwtSecret } = require("../config/config.default");
const { verify } = require("../utils/jwt");

exports.auth = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token ? token.split("Bearer ")[1] : null;
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    req.userName = decodedToken.userName;
    next();
  } catch (error) {
    return res.status(403).end();
  }
};
