const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories')

async function createAirplane(req, res){
    console.log('create airplane controller')
    try{
        const airplaneRepoObj = new AirplaneRepository();
       const response = await airplaneRepoObj.create({
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