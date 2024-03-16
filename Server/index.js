const express = require('express');
const DB = require('./Core/db');
const cors = require('cors');
const indexRoute = require('./Routes/index');
const apiRoute = require('./Routes/api');
DB();
require('dotenv').config();

let app  = express();

app.use(cors());

app.use(express.json());

app.use('/',indexRoute);
app.use('/v1',apiRoute);

app.listen(process.env.PORT,(_)=>{
    console.log('Server is running on port '+process.env.PORT)
})