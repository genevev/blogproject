import jwt from 'jsonwebtoken';
import 'dotenv/config';

class Jwt { 
    static access (userExiId) { 
      return new Promise(( resolve, reject) => { 
        const payload = {};
        const secret = process.env.SECRET;
        const options = { 
          expiresIn: '6h',
          issuer: 'veva',
          audience: userExiId.toString(),
        };
        jwt.sign(payload, secret, options, (err, token) => { 
          if(err) { 
            reject(err);
          }
          resolve(token);
        });
      });
    }

    static newUserId(token) { 
    return new Promise((resolve, reject) => { 
      jwt.verify( 
        token,
        process.env.SECRET,
        (err, payload) => { 
          if (err) return reject(err);
          const userId = payload.aud;
          resolve(userId);
        },
      );
    });    
    }
}
export default Jwt;