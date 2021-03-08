import joi from 'joi';

 
const schema = { 
    insertUser: joi.object({
        
        username: joi.string().max(8).regex(/[a-zA-Z]/).required(),
        email: joi.string().email().required(),
        password: joi.string().max(8).required()
        
    }),
}

export default schema;