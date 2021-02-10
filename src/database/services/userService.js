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
}  
export default UserService;