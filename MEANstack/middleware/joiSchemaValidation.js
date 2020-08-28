const Joi = require('@hapi/joi');
const constants = require('../constants/index');


const validateObjectSchema = (data, schema) => {
    const {error,} = schema.validate(data,{convert:false});
    if(error){
        // console.log('errorDetails ===',[error.message,error.path]);
        const errorDetails=error.details.map(value=>{
            return{
                error:value.message,
                path:value.path
            };
        });
        console.log("errorDetails===",errorDetails)
        return errorDetails
    }
    else return null
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.body, schema);
        
        if(error){
            response.body=error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}

module.exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.query, schema);
        
        if(error){
            response.body=error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}