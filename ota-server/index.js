require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 6789;
process.env.SECRET_KEY = 'omar';


app.use(cors());
app.use(express.json());

app.use(express.static('./client'));


// attributes / middlewares
const userCredentials = require('./attributes/user-credentials.attr');
const quriesAttributes = require('./attributes/query.attribute');
const authorizationAttribute = require('./attributes/authorization.attr');





// controllers
const registerAuthCtrl = require('./controllers/register.auth.ctrl');
const loginAuthCtrl = require('./controllers/login.auth.ctrl');
// const userCtrl = require('./controllers/user.ctrl');


//app.use('/auth', userCredentials, loginAuthCtrl);

app.use('/registerAuth', registerAuthCtrl);
app.use('/loginAuth', userCredentials, loginAuthCtrl);

const middlewares = [
  // authorizationAttribute,
  quriesAttributes.fieldsQuery
];

app.use('/register', ...middlewares, registerAuthCtrl);
app.use('/login', ...middlewares, loginAuthCtrl);





app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));