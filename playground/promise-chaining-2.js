require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('60b7bc3db85bb48960f16244').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60b86215f7ea4f3c6cb8d3fd').then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
})