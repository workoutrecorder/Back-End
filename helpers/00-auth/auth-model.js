const jwt = require('jsonwebtoken');
const secret = require('./secret').jwtSecret

module.exports = {
    authenticate
}

function authenticate(req, res, next){
    const token = req.get('Authorization');

    if(token){
        jwt.verify(token, secret, (err, decoded) => {
            if(err) return res.status(401).send("no");

            req.decoded = decoded;

            next();
        });
    } else {
        res.status(401).json({
            error: 'No token provided'
        })
    }
}