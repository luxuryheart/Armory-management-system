const bcrypt = require('bcryptjs')
const User = require('../models/User')

exports.register = async (req, res) => {
    try {
        //Check user
        const { firstname, lastname, username, password, email, tel, location, age } = req.body;
        //หา username ในตาราง users
        let user = await User.findOne({username})
        let checkEmail = await User.findOne({email})
        
        //If not username --> check email then if email not like old email --> save data 
        if (!user) {
            if (!checkEmail) { 
                const salt = await bcrypt.genSalt(10);
                user = new User({
                  firstname,
                  lastname,
                  username,
                  password,
                  email,
                  tel,
                  location,
                  age
                });

                //Encrypt
                user.password = await bcrypt.hash(password, salt);
                await user.save();

               return res.json({ msg: "Register Success!!!" , Status:'Success'});
            } else {
                res.json({Status:400, Error:'Email Already exists!!'});
            }
        } else {
            res.json({Status:400, Error:'User Already exists!!'});
        }    

    } catch(err) {
        console.log(err)
        res.status(400).json({Error:err})
    }
}