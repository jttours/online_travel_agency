const db = require('./../db/db');

function getVacations(callback) {
    db.performSelectAll('SELECT * FROM `ota_vacations` WHERE 1', function (err, res) {
       callback(err, res);
    });
 }

 
 
 
 
 
 
 
 
 
 module.exports.getVacations = getVacations;