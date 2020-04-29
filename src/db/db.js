const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})

// Start docker image
// docker-compose -f stack.yml up

// Enter docker mongo instance
// docker exec -it <image> bash

// Access localhost:8081 and create a new DB there named "school"

// Access db
// use school

// Create user
// db.createUser(
//   {
//     user: "user",
//     pwd: "password",
//     roles: [ { role: "readWrite", db: "school" } ]
//   }
// )