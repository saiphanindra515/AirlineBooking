const CrudOperations = require('./crud-operations');
const { City } = require('../models')

class CityRepository extends CrudOperations {
    constructor(){
        super(City);
    }
}

module.exports = CityRepository; 