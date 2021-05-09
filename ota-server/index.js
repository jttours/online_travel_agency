require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 6789;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.json());

app.use(express.static('./client'));


// attributes / middlewares
const quriesAttributes = require('./attributes/query.attribute');





// controllers
const authCtrl = require('./controllers/auth.ctrl');
const userCtrl = require('./controllers/user.ctrl');




app.use('/auth', authCtrl);

const middlewares = [
  quriesAttributes.fieldsQuery
];

app.use('/register', ...middlewares, authCtrl);




app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));