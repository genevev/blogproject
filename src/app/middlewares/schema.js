import joi from 'joi';

 
const schema = { 
    insertUser: joi.object({    
        username: joi.string().max(8).regex(/[a-zA-Z]/).required(),
        email: joi.string().email().required(),
        password: joi.string().max(8).required()    
    }),

    signinUser: joi.object({
        email: joi.string().email().required(),
        password: joi.string().max(8).required()    
    }),

    blog: joi.object({
        title: joi.string().required(),
        description: joi.string().required()       
    }),
}

export default schema;