const { error } = require('winston');
const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        let response = await airplaneRepository.create(data);
        return response;
    }
    catch{
        throw error;
    }
}

module.exports = {
    createAirplane
}