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

async function getPlaneByID(id){
    try{
        let airplane = await airplaneRepository.getByPK(id);
        return airplane;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deletePlaneById(id){
    try{
        let airplane = await airplaneRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(data, id){
    try{
        let response = await airplaneRepository.update(data, id);
        return response;
    }
    catch(error){
        console.log(error);
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAllPlanes,
    getPlaneByID,
    deletePlaneById,
    updateAirplane
}