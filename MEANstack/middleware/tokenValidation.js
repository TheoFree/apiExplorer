const constants = require('../constants');
const jwt = require('jsonwebtoken');
module.exports.validateToken = (req,res,next) =>{
    let response = {...constants.defaultServerResponse};
    try {
        if(!req.headers.authorization){
            throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    
        }
        const decoded = jwt.verify(req.headers.authorization.split('Bearer')[1].trim(),process.env.SECRET_kEY || 'my-secret-key');
        return next();

    } catch (error) {
        console.log('Error',error);
        response.message = error.message;
        response.status = 401;
    }
    return res.status(response.status).send(response)
}