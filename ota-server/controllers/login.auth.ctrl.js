const express = require('express');
const jwt = require('jsonwebtoken');

const userRepository = require('./../repositories/user.repository');

const router = express.Router();

router.post('/', function (req, res) {
    console.log ('the login request is - ',req);
   const { ota_user_username, ota_user_password } = req.body;
   userRepository.getLoginCredentials(ota_user_username, ota_user_password, function (err, userVerified) {
      if (userVerified) {
         const token = jwt.sign({
            user_id: userVerified.user_id,
            role: userVerified.role
         }, process.env.SECRET_KEY, {
            expiresIn: '5h'
         });
         return res.send(token);
      } else {
         res.status(401).send();
      }
   });
})




module.exports = router;