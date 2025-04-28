const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000

// MIDDLEWARE to parser form data
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(express.static(__dirname("form")))

// memory array to store contact
let contacts = []

// post route to receive form submissions
app.post('/contact', (req, res)=>{
    const { name, email, message } = req.body

    if(!name || !email || !message){
        return res.status(400).send('All fields are required.')
    }

    const newContact = {name, email, message}
    contacts.push(newContact)

    // SAVE TO json file
    fs.writeFileSync("contacts.json", JSON.stringify(contacts, null, 2))

    res.send('Contact information received successfully')
})

app.listen(PORT, console.log(`server is running on port ${PORT}`))
