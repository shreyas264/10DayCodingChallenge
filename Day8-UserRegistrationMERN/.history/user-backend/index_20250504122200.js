const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./models/user')

const app = express()
app.use(cors())
app.use(bodyParser.json());

mongoose.connect('')
    .then(()=>{console.log('Mongodb Connected')})
    .catch(err => console.log(err));

// POST /register
app.post('/register', async (req,res)=>{
    const {name, email, password} = req.body;
})

app.listen(PORT, console.log(`server is running on port ${PORT}`))