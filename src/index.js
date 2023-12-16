const express = require('express');

const { serverConfig, logger } = require('./config');

const apiRouter = require('./routes');

const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log('app is listening at port 3000');
    logger.info('Server Started Successfully', {})
})