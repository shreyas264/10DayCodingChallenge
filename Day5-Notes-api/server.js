const express = require('express')
const app = express()
const notesRoutes = require('./routes/notesRoutes')

app.use(express.json());
app.use('/api/notes', notesRoutes)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on at http://localhost:${PORT}`)
})