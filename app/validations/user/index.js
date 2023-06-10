const Joi = require('joi');
const validateUserRegisteration = (req,res,next)=>{

    const input = req.body.data;

    const JoiSchema = Joi.object({
        name: Joi.string()
                  .min(5)
                  .max(30)
                  .required(),
                    
        email: Joi.string()
               .email()
               .min(5)
               .max(50)
               .required(), 
                 
        password: Joi.string()
               .min(8)
               .max(18)
               .required(), 
                 
    }).options({ abortEarly: false });

    const validation_response =  JoiSchema.validate(input);

    if(validation_response.error){
        return res.status(400).json({
            status : 'error',
            message : 'bad request body'
        })
    }else{
        next();
    }

}

module.exports = {
    validateUserRegisteration : validateUserRegisteration
}