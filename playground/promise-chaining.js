require('../src/db/mongoose')
const User = require('../src/models/user')

// 60bd0254fdb56753a0a986f9

// User.findByIdAndUpdate('60bd0254fdb56753a0a986f9', { age: 27 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 20 })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count

}


updateAgeCount('60bd0254fdb56753a0a986f9', 26).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
})