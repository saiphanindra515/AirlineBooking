const { error } = require('winston');
const { CityRepository } = require('../repositories');
const ApiError = require('../utils/ApiError');

const httpStatusCodes = require('http-status-codes')

const cityRepository = new CityRepository();

async function createCity(data){
    try{
        let response = await cityRepository.create(data);
        return response;
    }
    catch(error){
        console.log(error.name);
        if(error.name === 'SequelizeDatabaseError' ){
            throw new ApiError(error.parent.sqlMessage, httpStatusCodes.BAD_REQUEST)
        }
        else if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            })
            throw new ApiError(explanation, httpStatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createCity
}