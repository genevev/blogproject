import joi from 'joi';

 
const schema = { 
    insertUser: joi.object({
        
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
        
    }),
}

export default schema;