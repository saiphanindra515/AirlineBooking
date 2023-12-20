const express = require('express');

const { serverConfig, logger } = require('./config');

const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('app is listening at port 3000');
    logger.info('Server Started Successfully', {})
}) 