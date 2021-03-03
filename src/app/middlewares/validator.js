import schema from './schema';
import GenericRes from '../helpers/response';

class Validator { 
    static async userSignup(req, res, next) { 
        const valeur = await schema.insertUser.validate(req.body);
        if (valeur.error) { 
            GenericRes.error(res, 402, valeur.error.message);
        } else { 
            next();
        }
    }

    static async usersignin(req, res, next) { 
        const valeur = await schema.insertUser.validate(req.body);
        if (valeur.error) { 
            GenericRes.error(res, 402, valeur.error.message);
        } else { 
            next();
        }
    }
}
  export default Validator;
