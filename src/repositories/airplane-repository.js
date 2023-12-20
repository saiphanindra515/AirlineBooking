const CrudOperations = require('./crud-operations');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudOperations {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository; 