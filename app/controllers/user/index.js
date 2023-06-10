const UserService = require('../../services/user');

class UserController {
    
    constructor(){
        this.user_service = new UserService();
    }

    async registerUser(user_body){
        try{
            const { name,email,password} = user_body;
            const saved_user = await this.user_service.saveUser(name,email,password);
            return saved_user;
        }catch(err){
            throw err;
        }
    }
}

module.exports = UserController;