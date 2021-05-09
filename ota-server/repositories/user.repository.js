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
          console.log('I am proceeding with the insert');
          db.performInsert("INSERT INTO `ota_users` (`ota_user_first_name`, `ota_user_last_name`, `ota_user_username`, `ota_user_password`) VALUES (?, ?, ?, ?)",
             [objModel.first_name, objModel.last_name, objModel.username, md5(objModel.password)], function (err, res) {
                callback(err, res);
             })
       } else return callback('username already exists');
    })
 
 
 }
 
//  module.exports.getById = getById;
//  module.exports.getOwned = getOwned;
//  module.exports.getByLogin = getByLogin;
 module.exports.add = add;