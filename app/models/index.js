const mongoose = require('mongoose');


const connectToDb = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-crud');
        console.log('connected to db');
    }catch(err){
        console.log('err',err.message);
    }

}

module.exports = {
    connectToDb : connectToDb
}