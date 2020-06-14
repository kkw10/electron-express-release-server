const { AuthService, JWT } = require('../service');

exports.Login = async (req, res, next) =>
{
  try
  {
    AuthService.authenticate(
      req,
      req.app.get('auth'),
      (err, user) =>
      {
        if(err)
        {
          return res
            .status(err.code || 401)
            .send(err.message || "Incorect credentials");
        }

        if(!user)
        {
          return res.status(500).send("Could not retrieve user");
        }

        const token = JWT.issueToken({ sub: user.userEmail }, req.app.get('jwt').tokenSecret);

        return res.status(200).json({
          user: user.userEmail,
          token
        })
      }
    )
  }
  catch(e)
  {
    console.error(e);
  }
}