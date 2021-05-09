const express = require('express');
const User = require('./../models/user');
const userRepository = require('./../repositories/user.repository');

const router = express.Router();

router.post('/', function (req, res) {
    try {
       const newUser = new User({
          ...req.body
       });
 
       usersDb.push(newUser);
       res.status(201).send(newUser);
    }
    catch (ex) {
       res.status(400).send(ex.message);
    }
 })
 








 module.exports = router;