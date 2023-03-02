const User = require('../models/users');
function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true
    } else {
        return false
    }
}
const signup = async (req,res) => {
    try{
    const {name,phno,email,password} = req.body;
    console.log( 'email',  email);
    if(isstringinvalid(name) || isstringinvalid(phno) || isstringinvalid(email) || isstringinvalid(password)){
        return res(400).json({err:"Bad Parameters . Something is missing"})
    }
    await User.create({name,phno,email,password })
        res.status(201).json({message:'Succussfuly create new user'})
    }catch(err){
        res.status(500).json(err);
    }
}
function generateAccessToken(id){

}