const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const userRepository = require('./../repositories/user.repository');

const router = express.Router();


router.post('/', function (req, res) {
  console.log('the post request -',req.body);
  const { firstName, lastName, userName, userPassword } = req.body.user;
  userRepository.add({
    first_name: firstName,
    last_name: lastName,
    username: userName,
    password: userPassword
  }, function (err, success) {
     if (err || !success) {
        return res.status(400).send(err)
     }
     res.status(201).send();
  });

})







 module.exports = router;