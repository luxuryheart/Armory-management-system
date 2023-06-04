const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        let user = await User.findOneAndUpdate({ username }, {new : true });
        if (user && user.enabled) {
            //Check Password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
            return res.json({Status:400, msg:'Password invalid!!!'})
            }
            //Payload 
            const payload = {
                user:{
                    username: user.username,
                    role: user.role
                }
            } 
            //Generate Token
            jwt.sign(payload, process.env.SECRET, {expiresIn: '1d'}, (err, token) => {
                if(err) throw err;
                res.json({token,payload})
            })


        } else {
            return res.json({Status:400, msg:'User not found!!!'})
        }

    } catch (error) {
        console.log(error);
        res.json({Status:500, Error:error});
    }
}