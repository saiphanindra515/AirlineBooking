const { StatusCodes } = require('http-status-codes');
const { airplaneService } = require('../services');
const {errorResponse} = require('../utils/reponses')


async function createAirplane(req, res){
    try{
       const response = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
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

async function getAllPlanesApi(req, res){
    try{
        const response = await airplaneService.getAllPlanes();
        res.status(StatusCodes.OK).json({
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

module.exports = {
    createAirplane,
    getAllPlanesApi
}