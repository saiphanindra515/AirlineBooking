const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/reponses");

function validationCreateAirplane(req, res, next){
    if(!req.body.modelNumber){
        errorResponse.status = 400;
        errorResponse.message =  "modelNumber is not sent";
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports = {validationCreateAirplane};