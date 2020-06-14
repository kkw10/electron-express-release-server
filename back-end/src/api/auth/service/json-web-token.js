const jwt = require('jsonwebtoken');

const JWT = {};

JWT.issueToken = (payload, jwtTokenSecret = null, options) => 
{
  const token = jwt.sign(
    payload, 
    process.env.TOKEN_SECRET || jwtTokenSecret,
    options
  );

  return token;
}

JWT.verifyToken = (token, jwtTokenSecret, cb) =>
{
  return jwt.verify(
    token,
    process.env.TOKEN_SECRET || jwtTokenSecret,
    {},
    cb
  )
}

module.exports = JWT;