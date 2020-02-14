const { AuthorizationError } = require( './../../utils/errors' );

module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization) {          //если есть в заголовках authorization
      req.authorizationData = {
        id: req.headers.authorization
      };
      return next();
    }
    next( new AuthorizationError() );
  } catch (e) {
    next( e );
  }

};