const httpCodes = require('http-status-codes');

let info = (req, res) => {
    return res.status(httpCodes.OK).json({
        success: true,
        data: {},
        error: {
        },
        message: 'api is live!'
    })
}

module.exports = {
    info
}