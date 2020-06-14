const AuthService = {};

AuthService.authenticate = (req, options, cb) =>
{
  let userEmail, userPassdword;

  if(!options)
  {
    throw new Error('Authentication requires local configuration');
  }

  userEmail = req.param('email');
  userPassword = req.param('password');

  if(!userEmail || !userPassword)
  {
    return cb({
      message: "Missing credentials",
      code: 400
    });
  }

  if(Object.keys(options).includes('static'))
  {
    AuthService._authenticateStatic(userEmail, userPassdword, options.static, cb);
  }
  else
  {
    throw new Error("Authention configuration incomplete.");
  }
};

AuthService._authenticateStatic = (userEmail, userPassdword, options, cb) =>
{
  if(!options)
  {
    throw new Error("LDAP authentication requires options");
  }

  if(
    userEmail !== options.userEmail ||
    userPassdword !== options.userPassdword
  )
  {
    return cb({
      message: "Invalid email or password",
      code: 401
    });
  }
  else {
    cb(null, { userEmail })
  }
};

module.exports = AuthService;