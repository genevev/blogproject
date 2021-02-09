import UserService from '../../database/services/userService';
import GenericRes from '../helpers/response'; 
import Passcode from '../helpers/utils';
import Jwt from '../middlewares/jwt';
class UserController {  
    static async signup(req, res) { 
        const { username, email, password } = req.body;
        const userEx = await UserService.userExist(username);
        //check whether the user exist
        if (userEx) { 
            GenericRes.error(res, 400, 'user already exist');
            return next()

        }
        try {
            //hash and remove user's password
            const hashedPasscode = await Passcode.hashPassw(password);
            
            const createUser = { username, email, password: hashedPasscode };

            // save the user in the db
            const creatModel = await UserService.createUser(creatUser);

            // Get the user's Id registered
            const id = getId.id;

            // remove the passwd
            delete req.body.password;

            // generate jwt
            const token = await Jwt.signJwtSecret(id, { 
                expiresIn: '2h',
            });
            if (creatModel) { 
                GenericRes.success(res, 201, 'Successfully registration', { id, username, email, ...req.body, token });
            } else { 
                GenericRes.error(res, 409, 'Fail to connect');
            }
        } catch(e) { 
            GenericRes.error(res, 409, e.message);
        }  
    }
}


export default UserController;