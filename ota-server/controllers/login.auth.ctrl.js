const express = require('express');
const jwt = require('jsonwebtoken');
//require('dotenv').config();

const userRepository = require('./../repositories/user.repository');

const router = express.Router();

router.post('/', function (req, res) {
   console.log('the request body in the login auth ctrl is - ',req.body);
   const { userName, userPassword } = req.body.loginState;
   console.log('username - ',userName,'password - ',userPassword);
   userRepository.getLoginCredentials(userName, userPassword, function (err, userVerified) {
      console.log('the verified user deetails are - ',userVerified);
      const { ota_user_id, ota_user_first_name,ota_user_last_name,ota_user_username,ota_user_role } = userVerified;
      if (userVerified) {
         const token = jwt.sign({
            user_id: userVerified.ota_user_id,
            user_first_name: userVerified.ota_user_first_name,
            user_last_name: userVerified.ota_user_last_name,
            role: userVerified.ota_user_role
         }, process.env.SECRET_KEY, {
            expiresIn: '5h'
         });
         //console.log('the details that I want sent are - ',token, userVerified.ota_user_first_name);
         return res.json({token: token,user: {userId : ota_user_id,firstName : ota_user_first_name,lastName:ota_user_last_name,userName:ota_user_username,role:ota_user_role}});
      } else {
         res.status(401).send();
      }
   });
})




module.exports = router;