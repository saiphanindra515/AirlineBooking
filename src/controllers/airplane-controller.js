const { StatusCodes } = require('http-status-codes');
const { airplaneService } = require('../services')

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
    catch{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            message: 'OK',
            error: "internal server error",
            status: 501
        })
    }
}

module.exports = {
    createAirplane
}