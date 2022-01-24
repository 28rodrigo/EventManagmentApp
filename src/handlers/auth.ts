const jwt = require('jsonwebtoken');

var generateToken = (payload:any):string => {
    return jwt.sign({name: payload}, process.env.TOKEN_SECRET, { expiresIn: 36000000060});
}

var verify = (token:any, callback:any) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (err:any, user:any) => {
        if (err) {
            console.error(err);
        }
        callback(user);
    });
}
export default{
    generateToken:generateToken,
    verify:verify
}