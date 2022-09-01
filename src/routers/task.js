const express = require('express')
const router = new express.Router()
const Task = require('../models/tasks')

router.get('/test', (req, res) => {
    res.send('From a new file')
})

/*********** TASKS ***************/

//Creating Tasks.........
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Reading all tasks
router.get('/tasks', async (req, res) => {

    const tasks = await Task.find({})
    try {
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }


})

// Reading tasks by ID
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    const task = await Task.findById(_id)
    try {
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }

})

// Updating task by ID
router.patch('/tasks/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates!' })
    }

    try {

        const task = await Task.findById(req.params.id)
        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        await task.save()
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Deleting Task

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router