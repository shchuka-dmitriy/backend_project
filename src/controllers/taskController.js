const { Task } = require('../db/models/');
const Controller = require('../utils/controller');

class TaskController {
  constructor(){
    this._controller = new Controller( Task );
  }

  createTask = async (req, res, next) => {
    try{
      const taskData = (await this._controller.create( req.body ));
      res.status(201).send(taskData);
    } catch (e) {
      next(e);
    }
  };

  deleteTask = async (req, res, next) => {
    try {
      /*const taskData = await this._controller.delete( req.params.id );
      res.send(taskData);*/

      res.send({
        isDeleted: (await this._controller.delete(req.params.id)) === '1'
      });
    } catch(e) {
      next(e);
    }
  };

  getTask = async (req, res, next) => {
    try {
      const taskData = await this._controller.read(req.params.id, {});
      res.send(taskData);
    } catch (e) {
      next(e);
    }
  };

  updateTask = async (req, res, next) => {
    try{
      res.send( (await this._controller.update(req.params.id, req.body)) );
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new TaskController();