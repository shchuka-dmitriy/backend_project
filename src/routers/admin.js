const express = require( 'express' );
const { User } = require( '../db/models' );
const adminRouter = express.Router();

adminRouter.route( '/users' )
           .get( async (req, res, next) => {
             try {
               const users = await User.findAll( {
                                                   //limit: 10,                       /*выводить по 10*/
                                                   limit: req.query.limit || 40,      /*выводить или как в параметрах или по 40*/
                                                   offset: req.query.offset || 0,
                                                   attributes: {
                                                     exclude: ['password']          /*пароль не выводить*/
                                                   }
                                                 } );
               res.send( users );
             } catch (e) {
               throw (e);
             }
           } );

module.exports = adminRouter;