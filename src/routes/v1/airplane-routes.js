const express = require('express');
const { airplaneController } = require('../../controllers');
const { airplaneMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', airplaneMiddleware.validationCreateAirplane ,airplaneController.createAirplane);

router.get('/', airplaneController.getAllPlanesApi);

module.exports = router;