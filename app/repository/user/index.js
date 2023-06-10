const User = require('../../models/user');

class UserRepository {

    async save(name,email,password) {
        try{

            let new_user = new User({
                name,
                email,
                password,
                is_active : false
            });

           return await new_user.save();

        }catch(err){
            throw err;
        }
    }

    async findOne(email) {
        try{

            return await User.findOne({
                email  :email
            });

        }catch(err){
            throw err;
        }
    }
}


module.exports = UserRepository