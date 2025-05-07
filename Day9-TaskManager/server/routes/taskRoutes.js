const express = require("express")
const router = express.Router()
const Task = require('../models/task')

// Create task
router.post("/tasks", async (req, res) =>{
    try{
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    }catch (err){
        res.status(400).json({error: err.message})
    }
})

// get all tasks
router.get("/tasks", async (req, res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})

// mark task as completed
router.put("/tasks/:id", async (req, res) =>{
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {completed: true},
            {new: true}
        )
        res.json(updatedTask)
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router;