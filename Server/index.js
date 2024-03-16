const express = require('express');
const DB = require('./Core/db');
DB();
require('dotenv').config();

let app  = express();

app.listen(process.env.PORT,(_)=>{
    console.log('Server is running on port '+process.env.PORT)
})