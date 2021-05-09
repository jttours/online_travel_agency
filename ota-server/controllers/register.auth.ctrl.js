const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const userRepository = require('./../repositories/user.repository');

const router = express.Router();


router.post('/', function (req, res) {
  const { ota_user_first_name, ota_user_last_name, ota_user_username, ota_user_password } = req.body;
  userRepository.add({
    first_name: ota_user_first_name,
    last_name: ota_user_last_name,
    username: ota_user_username,
    password: ota_user_password
  }, function (err, success) {
     if (err || !success) {
        return res.status(400).send(err)
     }
     res.status(201).send();
  });

})







 module.exports = router;