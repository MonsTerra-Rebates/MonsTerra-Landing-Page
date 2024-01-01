const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userScema = new Schema({
    name: {type: String},
    email:{type: String},
    phone:{type: String},
    entryDate: {type:Date, default: Date.now}
})

const Users = mongoose.model('Users', userScema, 'users')

const mySchemas = {'Users': Users}

module.exports = mySchemas