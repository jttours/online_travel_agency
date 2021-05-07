require('dotenv').config();
const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;

//data base details

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
  });






app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));