import jwt from 'jsonwebtoken';
import 'dotenv/config';

class Jwt { 
    static access (userExiId) {

      const token = jwt.sign({ userExiId: userExiId}, 
        process.env.SECRET, {
        expiresIn: "1h",
      })

      return token;

    };

}
export default Jwt;