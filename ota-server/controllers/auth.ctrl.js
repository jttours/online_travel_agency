const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const userRepository = require('./../repositories/user.repository');

const router = express.Router();


router.post('/', function (req, res) {
 console.log ('the request body is - ',req.body);
  const { ota_user_first_name, ota_user_last_name, ota_user_username, ota_user_password } = req.body;
  userRepository.add({
    //user_id: ota_user_id,
    first_name: ota_user_first_name,
    last_name: ota_user_last_name,
    username: ota_user_username,
    password: ota_user_password
    //role: ota_user_role
  }, function (err, success) {
     if (err || !success) {
        return res.status(400).send(err)
     }
     res.status(201).send();
  });

})



// router.post("/", (req, res) => {
//   const { ota_user_first_name, ota_user_last_name, ota_user_username, ota_user_password } = req.body;
//   bcrypt.hash(ota_user_password, 10).then((hash) => {
//     userRepository.add({
//       first_name: ota_user_first_name,
//        last_name: ota_user_last_name,
//        username: ota_user_username,
//        password: hash
//     })
//       .then(() => {
//         res.json("USER REGISTERED");
//       })
//       .catch((err) => {
//         if (err) {
//           res.status(400).json({ error: err });
//         }
//       });
//   });
// });





 module.exports = router;