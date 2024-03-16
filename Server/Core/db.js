const mongoose = require('mongoose')
require('dotenv').config()


module.exports = connectDB = ()=>{
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,{
        dbName: process.env.DB_NAME
    })
    .then(()=>{
        console.log(`database is connected to ${process.env.DB_HOST}:${process.env.DB_PORT}`)
    })

}