const express = require('express');
const jwt = require('jsonwebtoken');
//require('dotenv').config();

const userRepository = require('./../repositories/user.repository');

const router = express.Router();

router.post('/', function (req, res) {
   console.log('the request body in the login auth ctrl is - ',req.body);
   const { userName, userPassword } = req.body;
   console.log('username - ',userName,'password - ',userPassword);
   userRepository.getLoginCredentials(userName, userPassword, function (err, userVerified) {
      if (userVerified) {
         const token = jwt.sign({
            user_id: userVerified.user_id,
            role: userVerified.role
         }, process.env.SECRET_KEY, {
            expiresIn: '5h'
         });
         console.log(token);
         return res.send(token);
      } else {
         res.status(401).send();
      }
   });
})




module.exports = router;