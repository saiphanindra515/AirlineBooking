const { error } = require('winston');
const { AirportRepository } = require('../repositories');
const ApiError = require('../utils/ApiError');

const httpStatusCodes = require('http-status-codes')

const airportRepository = new AirportRepository();

async function createAirport(data){
    try{
        let response = await airportRepository.create(data);
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

async function getAllAirports(){
    try{
        let airplanes = await airportRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new ApiError('Something Failed at DB Level', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirportByID(id){
    try{
        let airplane = await airportRepository.getByPK(id);
        return airplane;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirportById(id){
    try{
        let airplane = await airportRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(data, id){
    try{
        let response = await airportRepository.update(data, id);
        return response;
    }
    catch(error){
        console.log(error);
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAllAirports,
    getAirportByID,
    deleteAirportById,
    updateAirport
}