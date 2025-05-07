const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/task-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>  console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB ERROR:", err))

const taskRoutes = require("./routes/taskRoutes")
app.use("/api", taskRoutes)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})