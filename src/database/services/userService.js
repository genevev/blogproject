import db from '../models/';

class UserService { 
    
    static async createUser(userModel) {
        const res = await db.User.create(userModel);  
        return res;
     }
   
    static async userExist(reqUser) { 
        const res = await db.User.findOne({ where: { username: reqUser}});
        return res;
    }   

    static async getId(reqUSer) { 
        const res = await db.User.findOne({ where: { username: reqUSer}});
        return res;
    }

    static async userSignIn(user) { 
        const res = await db.User.findOne({ where: { username: user}});
        return res;
    }
} 

export default UserService;