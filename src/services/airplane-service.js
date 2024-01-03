const { error } = require('winston');
const { AirplaneRepository } = require('../repositories');
const ApiError = require('../utils/ApiError');

const httpStatusCodes = require('http-status-codes')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        let response = await airplaneRepository.create(data);
        return response;
    }
    catch(error){

        if(error.name === 'SequelizeDatabaseError' ){
            throw new ApiError(error.parent.sqlMessage, httpStatusCodes.BAD_REQUEST)
        }
        else if (error.name === 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            })
            throw new ApiError(explanation, httpStatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

async function getAllPlanes(){
    try{
        let airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new ApiError('Something Failed at DB Level', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAllPlanes
}