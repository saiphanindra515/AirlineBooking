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

async function getCities(){
    try{
        const cities = await cityRepository.getAll();
        return cities;
    }
    catch(error){
        throw new ApiError('Something Failed at DB Level', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }   
}

async function getCityId(id){
    try{
        let city = await cityRepository.getByPK(id);
        return city;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCityById(id){
    try{
        let city = await cityRepository.destroy(id);
        return city;
    }
    catch(error){
        if (error.status === httpStatusCodes.NOT_FOUND){
            throw error;
        }
        throw new ApiError('some error', httpStatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getCities,
    getCityId,
    deleteCityById
}