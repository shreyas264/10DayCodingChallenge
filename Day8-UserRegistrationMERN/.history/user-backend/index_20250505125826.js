const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./models/user')
const PORT = 3000;

const app = express()
app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/userdb')
    .then(()=>{console.log('Mongodb Connected')})
    .catch(err => console.log(err));

// POST /register
app.post('/register', async (req,res)=>{
    // const {name, email, password} = req.body;

    // if(!name || !email || !password){
    //     return res.status(400).json({message:"All fields required"});
    // }

    // const newUser = new User({name, email, password});
    // await newUser.save();
    // res.status(201).json({message:"User registration successfully"})
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))

})

app.listen(PORT, console.log(`server is running on port ${PORT}`))