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
// docker exec -it 028f0aa57ed5 bash

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