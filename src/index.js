const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {           //Middleware function
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {

//     res.status(503).send('Server under maintenance')

// })

app.use(express.json())  //to parse incoming json data to an object
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})



// /Users/sansk/mongodb/bin/mongod.exe --dbpath=/Users/sansk/mongodb-data --port=27017

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'broke022' }, 'ineedmoney')
    console.log(token);

    const data = jwt.verify(token, 'ineedmoney')
    console.log(data);
}

myFunction()