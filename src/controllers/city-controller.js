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

module.exports = {
    createCityApi
}