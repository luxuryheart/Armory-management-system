const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers['authtoken']

        if (!token) {
            return res.json({Status:401, msg:'Not found token, authorization denied'})
        }
        const decoded = jwt.verify(token, process.env.SECRET)

        req.user = decoded.user

        next()

    } catch (error) {
        console.log(error);
        res.json({Status:401, msg:'Token Invalid!!!'})
    }
}