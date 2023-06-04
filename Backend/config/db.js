const mongoose = require('mongoose');

const connectDB = async() => {
    
    try {
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:false,
            // userCreateIndex:true,
            // useFindAndModify:true
        })
        .then(()=>console.log('เชื่อมต่อเรียบร้อย'))    
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;