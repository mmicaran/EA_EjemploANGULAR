const User = require('../models/user');
const http = require('http');
const usersCtrl = {};

usersCtrl.singUp = async (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    console.log(user);

    try{
        await user.save();
        res.status(200).send({message: 'User created successfully'});
    }catch(err){
        res.status(404).send({err: err.message, code: err.code});
        console.log(err);
    }
}

usersCtrl.logIn = async (req, res) => {
    console.log(req.body);
    try {        
        let user = await User.findOne({email: req.body.email, password: req.body.password});
        console.log(user);
        if (!user) {
            res.status(404).send({ message: 'User not found'})
        } else {
            res.status(200).send({
                message: 'Sign in!'
            })
        }
    }catch(err) {
        res.status(500).send ({ message: err})
    }
    
}

usersCtrl.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send(err);
    }
    
}

usersCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User Saved'
    });
}

usersCtrl.getUser = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send({message: 'User not found'});
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        res.status(500).send(err);
    } 
}

usersCtrl.editUser = async (req,res) =>{
    const {id} = req.params;
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    await User.findByIdAndUpdate(id,  {$set: user}, {new: true});
    res.json({status: "User update"});

}

usersCtrl.delteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send({message: 'User not found'});
        }else{
            res.status(200).send({message: 'User deleted succes'});
        }
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = usersCtrl;