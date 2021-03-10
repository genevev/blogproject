import GenericRes from "./response";
import Jwt from "../middlewares/jwt";

class ExtactToken { 

    static async authentication(req, res, next) { 
        const authHeader = req.headers.authorization;
        if (!authHeader) { 
            GenericRes.error(res, 401, 'try again late');
            return next();
        }

        const extractToken = authHeader.split(' ')[1];
        const userId = await Jwt.newUserId(extractToken);
        if (!userId) { 
            GenericRes.error(res, 404, 'Not authorized');
            return next();
        }
        return userId;
    }
}

export default ExtactToken;