const { createLogger, format, transports } =require('winston');
const winston = require('winston/lib/winston/config');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(( {level, message, label, timestamp} ) => {
    return `${timestamp}: ${level} ${message}`
})

const logger = createLogger({
    format: combine(
        label({ label: 'right' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' }),
    ]
})

module.exports = logger