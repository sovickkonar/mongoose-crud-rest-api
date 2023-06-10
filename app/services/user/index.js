const UserRepository = require('../../repository/user');

class UserService{

    constructor(){
        this.user_repository = new UserRepository();
    }

    async saveUser(name,email,password){
        try{
            const user = await this.user_repository.findOne(email);
            if(!user){
                return await this.user_repository.save(name,email,password); 
            }else{
                throw new Error('user exists already');
            }
        }catch(err){
            throw err;
        }
    }
}


module.exports = UserService;