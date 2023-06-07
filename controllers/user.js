const User = require('../models/user');

const handleSignUp = async (req, res) => {
    try {
        const {email, password, confirm_password} = req.body;
        if(!password === confirm_password){
            return res.status(500).json({message : "password doesn't matches"});
        }
        User.create({
            email,
            password,
            confirm_password
        })

        return res.status(200).json({success : true, message : "user created"});
    } catch (error) {
        return res.status(502).json(error);
    }
}

const handleSignIn = async (req,res) => {
    try {
        const {email, password} = req.body;
        const userExists = User.findOne({email});
        if(!userExists){
            return res.status(500).json({message : "User Doesn't Exists"});
        }
        res.send("User login");
        res.redirect("/add")
        // return res.status(200).json({success : true})
    } catch (error) {
        return res.status(502).json(error);
    }
}


const getAllUsers = async (req,res) => {
    try {
        const answer = await User.find();

        return res.status(200).json(answer);
    } catch (error) {
        return res.status(502).json(error);
    }
}
module.exports = {
    handleSignIn,
    handleSignUp,
    getAllUsers
}