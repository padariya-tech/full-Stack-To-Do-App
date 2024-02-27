const jwt = require("jsonwebtoken");
const { User } = require("../models/user.models");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.cookie.replace("access_token=", "");
        // console.log(token);
        if (!token) {
            return res.json({error:"Not Authenticated or not Authenticated user"});
        }

        const verifyUser = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifyUser) {
            return res.json({error:"Not Authenticated or not Authenticated user2"});
        }
// console.log(verifyUser.id);
        const user = await User.findById(verifyUser.id).select("-password -tokens");
        
        if (!user) {
            return res.json({error:"User not found"});
        }
        
        req.user = user;
        next();
    } catch (err) {
        console.error(err);
       
    }
};

module.exports = auth;
