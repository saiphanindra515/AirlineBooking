const express = require('express');
const { infoController } = require('../../controllers');
const airplaneRouter = require('./airplane-routes');
const cityRouter = require('./city-routes');

const router = express.Router();

router.use('/flights', airplaneRouter );

router.use('/city', cityRouter);

router.get('/info', infoController.info);

module.exports = router;