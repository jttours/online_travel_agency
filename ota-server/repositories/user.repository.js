//const bcrypt = require("bcrypt");
const md5 = require('md5');

const db = require('./../db/db');



function usernameAlreadyExists(username, callback) {
    db.performSelect('SELECT ota_user_username FROM `ota_users` WHERE `ota_user_username` = ?', [username], function (err, res) {
       if (res.length > 0) {
          callback(null, true);
       } else callback(null, false);
    });
 }


function add(objModel, callback) {
    usernameAlreadyExists(objModel.username, function (err, res) {
       if (!res) {
          console.log('I am proceeding with the insert - ', objModel);
          db.performInsert("INSERT INTO `ota_users` (`ota_user_first_name`, `ota_user_last_name`, `ota_user_username`, `ota_user_password`) VALUES (?, ?, ?, ?)",
             [objModel.first_name, objModel.last_name, objModel.username, md5(objModel.password)], function (err, res) {
                callback(err, res);
             })
       } else return callback('username already exists');
    })
 }

 function getLoginCredentials(username, password, callback) {
   console.log('I am proceeding with the login - ', username,password);
   db.performSelect('SELECT * FROM `ota_users` WHERE `ota_user_username` = ? AND `ota_user_password` = ?', [username, md5(password)], function (err, res) {
      callback(err, res.length == 1 ? res[0] : null);
   });
}
 
//  module.exports.getById = getById;
//  module.exports.getOwned = getOwned;
module.exports.getLoginCredentials = getLoginCredentials;
module.exports.add = add;