const { logger } = require('../config');

class CrudOperations{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = this.model.create(data);
            return response;
        }
        catch{
            logger.error('Error in CRUD Repo: create');
            throw error; 
        }
    }

    async destroy(data){
        try{
            const response = this.model.destroy({
                where: {
                    id: data
                }
            })
            return response
        }
        catch{
            logger.error('Error in CRUD Repo: destroy');
            throw error; 
        }
    }

    async getByPK(id){
        try{
            const response = this.model.findByPk(id);
            return response
        }
        catch{
            logger.error('Error in CRUD Repo: getByPK');
            throw error; 
        }
    }

    async getAll(){
        try{
            const response = this.model.findAll();
            return response
        }
        catch{
            logger.error('Error in CRUD Repo: getALL');
            throw error; 
        }
    }

    async update(data, id){
        try{
            const response = this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response
        }
        catch{
            logger.error('Error in CRUD Repo: update');
            throw error; 
        }
    }

}