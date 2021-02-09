import bcrypt from 'bcrypt';

class Passcode { 
    static async hashPassw(pass) { 
       return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
    }
    static comparePassw(pass, datapass) { 
        return bcrypt.compareSync( 
            pass,
            datapass
        );
    }
}

export default Passcode;
