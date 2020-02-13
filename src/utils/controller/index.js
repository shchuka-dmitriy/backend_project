class Controller {

  constructor( model ){
    this._model = model;
  }

  get model(){
    return this._model;
  }

  create = async (data) => {
    const newInstance = await this.model.create(data);
    if(newInstance){
      return newInstance;
    }
    throw new Error();
  };

  read = async (id, options = {} ) => {
    const instance = await this.model.findByPk(id, options);
    if (instance){
      return instance;
    }
    throw new Error();
  };

  update = async (id, data) => {
    const [updatedRowsCount, updatedRows] = await this.model.update( data, {
      where: {
        id: id
      },
      returning: true
    } );
    if (updatedRowsCount) {
      return updatedRows;
    }
    throw new Error();
  };

  delete = async () => {

  };
}

module.exports = Controller;