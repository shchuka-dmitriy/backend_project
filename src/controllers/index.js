



/*без babel, только на js*/
/*
const { User } = require( './models' );

class UserController {
  createUser = async (req, res, next) => {
    try {
      const createUser = await User.create( req.body );
      res.send( createUser );
    } catch (e) {
      return res.status( 404 ).send( 'Bad request' );
    }
  };
}

module.exports = new UserController();*/
