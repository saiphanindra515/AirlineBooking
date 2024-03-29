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

async function getPlane(req, res){
    try{
        console.log(req.params);
        const response = await airplaneService.getPlaneByID(req.params?.id);
        res.status(StatusCodes.OK).json({
            data: response,
            message: 'OK',
            error: null,
            status: 200
        })
    }
    catch(error){
        console.log(error);
        errorResponse.status = error.status;
        errorResponse.error = error.explanation;
        res.status(error.status).json(errorResponse);
    }
}

async function deletePlane(req, res){
    try{
        console.log(req.params);
        const response = await airplaneService.deletePlaneById(req.params?.id);
        res.status(StatusCodes.OK).json({
            data: response,
            message: 'OK',
            error: null,
            status: 200
        })
    }
    catch(error){
        console.log(error);
        errorResponse.status = error.status;
        errorResponse.error = error.explanation;
        res.status(error.status).json(errorResponse);
    }
}

async function updatePlane(req, res){
    try{
        let response = await airplaneService.updateAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }, req.body.id)
        res.status(StatusCodes.ACCEPTED).json({
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
    getAllPlanesApi,
    getPlane,
    deletePlane,
    updatePlane
}