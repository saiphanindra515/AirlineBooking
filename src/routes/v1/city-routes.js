const express = require('express');
const { cityController } = require('../../controllers');
//const { airplaneMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', cityController.createCityApi);

// router.get('/', airplaneController.getAllPlanesApi);

// router.get('/:id', airplaneController.getPlane);

// router.delete('/:id', airplaneController.deletePlane)

module.exports = router;