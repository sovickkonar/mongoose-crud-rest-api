require('dotenv').config();
const bcrypt = require('bcrypt');
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const UserRepository = require('../../repository/user');

class UserService{

    constructor(){
        this.user_repository = new UserRepository();
    }

    async saveUser(name,email,password){
        try{
            const user = await this.user_repository.findOne(email);
            if(!user){
                const hased_password = await bcrypt.hash(password,SALT_ROUNDS);
                return await this.user_repository.save(name,email,hased_password); 
            }else{
                throw new Error('user exists already');
            }
        }catch(err){
            throw err;
        }
    }
}


module.exports = UserService;