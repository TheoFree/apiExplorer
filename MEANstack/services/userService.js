const User = require('../database/models/userModel');
const constants = require('../constants');
const {formatMongoData} = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.signup = async ({email, password}) =>{
    try {
        const user = await User.findOne({email});
        if(user){
            throw new Error("constants.userMessage.DUPLICATE_EMAIL")
        }
        password = await bcrypt.hash(password,12);
        const newUser = new User({email,password});

        let result = await newUser.save();
        return formatMongoData(result)
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: signup", error);
    }

};
module.exports.login = async ({email, password}) =>{
    try {
        const user = await User.findOne({email});
        if(!user){
            throw new Error("constants.userMessage.USER_NOT_FOUND")
        }
        const isValue = await bcrypt.compare(password, user.password);
        if(!isValue){
            throw new Error("constants.userMessage.INCORRECT_PASSWORD")
        }
        const token = jwt.sign({id: user._id},process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'});
        return {token};
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: login", error);
    }

};