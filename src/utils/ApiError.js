class ApiError extends Error{
    constructor(message, status){
        super();
        this.explanation = message;
        this.status = status;
    }
}

module.exports = ApiError;