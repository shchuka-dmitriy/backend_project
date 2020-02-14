import ApplicationError from '../utils/errors/ApplicationError.js';

const express = require( 'express' );
const { checkAuthorization } = require( '../middlewares/authorization' );
const { UserController, TaskController } = require( '../controllers' );
const router = express.Router();

router.use( checkAuthorization );
router.route( '/user(/:id)?' )                  //   "/user" или "/user/:id"
      .post( UserController.createUser )
      .get( UserController.getUserById )
      .patch( UserController.updateUser )
      .delete( UserController.deleteUser );

router.route( '/task(:/id)?' )
      .post( TaskController.createTask )
      .get( TaskController.getTaskById )
      .patch( TaskController.updateTask )
      .delete( TaskController.deleteTask );

router.use( (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status( err.status ).send( err.message );
  }
  return next( err );
} );

module.exports = router;