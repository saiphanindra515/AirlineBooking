const { logger } = require('../config');

class CrudOperations{

    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = this.model.create(data);
        return response;
    }

    async destroy(data){
        const response = this.model.destroy({
            where: {
                id: data
            }
        })
        return response
    }

    async getByPK(id){
        const response = this.model.findByPk(id);
        return response
    }

    async getAll(){
        const response = this.model.findAll();
        return response
    }

    async update(data, id){
        const response = this.model.update(data, {
            where: {
                id: id
            }
        });
        return response
    }

}

module.exports = CrudOperations;