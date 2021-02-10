import jwt from 'jsonwebtoken';

class Jwt { 
    static verifyJwt(token) { 
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return data.data;
    }

    static generateJwt(data = {}, expiersIn = { expiresIn: '2h'}) { 
        const token = jwt.sign({ data }, process.env.JWT_SECRET_KEY, expiresIn)
        return token;
    }
}
export default Jwt;