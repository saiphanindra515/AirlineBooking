const { logger } = require('../config');
const ApiError = require('../utils/ApiError');
const httpStatusCodes = require('http-status-codes');

class CrudOperations{

    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data){
        const response = await this.model.destroy({
            where: {
                id: data
            }
        })
        if(!response){
            throw new ApiError('NOT FOUND', httpStatusCodes.NOT_FOUND );
        }
        return response
    }

    async getByPK(id){
        const response = await this.model.findByPk(id);
        console.log(response, "getByPk")
        if(!response){
            throw new ApiError('NOT FOUND', httpStatusCodes.NOT_FOUND );
        }
        return response
    }

    async getAll(){
        const response = await this.model.findAll();
        return response
    }

    async update(data, id){
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
        return response
    }

}

module.exports = CrudOperations;