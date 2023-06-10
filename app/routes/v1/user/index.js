const router = require('express').Router();
const { validateUserRegisteration } = require('../../../validations/user');
const UserController = require('../../../controllers/user');

router.post('/register',validateUserRegisteration,async(req,res)=>{
    try{

        const user_controller = new UserController();

        const user_body = req.body.data;
        const saved_user = await user_controller.registerUser(user_body);

        return res.status(201).json({
            status : 'success',
            user : saved_user
        })

    }catch(err){

        if(err.message  === 'user exists already'){
            return res.status(409).json({
                status  : 'error',
                message : 'user registeration failed.',
                error_message : err.message
            })
        }else{
            return res.status(500).json({
                status  : 'error',
                message : 'internal error',
                error_message : err.message
            })
        }
    }
});


module.exports = router;