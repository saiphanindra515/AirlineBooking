const CrudOperations = require("./crud-operations");
const { Airport } = require('../models')

 
 class AirportRepository extends CrudOperations{
    constructor(){
        super( Airport )
    }
 }

 module.exports =  AirportRepository;