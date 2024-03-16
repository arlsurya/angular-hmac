const express = require('express');
require('dotenv').config();
let app  = express();

app.listen(process.env.PORT,(_)=>{
    console.log('Server is running on port '+process.env.PORT)
})