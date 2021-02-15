import UserService from '../../database/services/userService';
import GenericRes from '../helpers/response'; 
import Passcode from '../helpers/utils';
import Jwt from '../middlewares/jwt';
class UserController {  
    static async signup(req, res, next) { 
        const { username, email, password } = req.body;
        const userEx = await UserService.userExist(username);
        //check whether the user exist
        if (userEx) { 
            GenericRes.error(res, 400, 'user already exist');
            return next();
        }
        try {
            //hash and remove user's password
            const hashedPasscode = await Passcode.hashPassw(password);
            
            const createUser = { username, email, password: hashedPasscode };

            // save the user in the db
            const saveUser = await UserService.createUser(createUser);

            // Get the user's Id registered
            const userExi = req.body.username;
            const getId = await UserService.getId(userExi);
            const id = getId.id;

            // remove the passwd
            delete req.body.password;

            //generate jwt
           const token = await Jwt.access(id);

            if (saveUser) { 
                GenericRes.success(res, 201, { id, username, email,  token });
            } else { 
                GenericRes.error(res, 409, 'Fail to connect');
            }
        } catch(e) { 
            GenericRes.error(res, 409, e.message);
        }  
    }
}


export default UserController;