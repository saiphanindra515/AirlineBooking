const { StatusCodes } = require('http-status-codes');
const { cityService } = require('../services');
const {errorResponse} = require('../utils/reponses')


async function createCityApi(req, res){
    try{
        const response = await cityService.createCity({
            name: req.body.name
         });
         res.status(StatusCodes.CREATED).json({
             data: response,
             message: 'OK',
             error: null,
             status: 200
         })
     }
     catch(error){
         errorResponse.status = error.status;
         errorResponse.error = error.explanation;
         res.status(error.status).json(errorResponse);
     }
}

async function getCitiesApi(req, res){
    try{
        const cities = await cityService.getCities();
        res.status(StatusCodes.CREATED).json({
            data: cities,
            message: 'OK',
            error: null,
            status: 200
        })

    }catch(error){
        errorResponse.status = error.status;
        errorResponse.error = error.explanation;
        res.status(error.status).json(errorResponse);
    }
}

async function getCityApi(req, res){
    try{
        const city = await cityService.getCityId(req.params.id);
        res.status(StatusCodes.CREATED).json({
            data: city,
            message: 'OK',
            error: null,
            status: 200
        })

    }catch(error){
        errorResponse.status = error.status;
        errorResponse.error = error.explanation;
        res.status(error.status).json(errorResponse);
    }
}

async function deleteCityApi(req, res){
    try{
        const city = await cityService.deleteCityById(req.params.id);
        res.status(StatusCodes.CREATED).json({
            data: city,
            message: 'OK',
            error: null,
            status: 200
        })

    }catch(error){
        errorResponse.status = error.status;
        errorResponse.error = error.explanation;
        res.status(error.status).json(errorResponse);
    }
}



module.exports = {
    createCityApi,
    getCitiesApi,
    getCityApi,
    deleteCityApi
}