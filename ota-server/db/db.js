const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'12345678',
   database: 'online_travel_agency'
  });


connection.connect(function (err) {
   if (err) console.log(err);
});

function performSelect(query, values, callback) {
    connection.query(query, values, function (err, results) {
       callback(err, results);
    });
 }
 
 function performInsert(query, values, callback) {
    connection.query(query, values, function (err, results) {
       callback(err, results.affectedRows === 1);
    });
 }
 
 function performDelete() {
 
 }
 
 function performUpdate() {
 
 }
 
 function performQuery(query, values, callback) {
    connection.query(query, values, function (err, results) {
       callback(err, results);
    });
 }
 
 module.exports = {
    performSelect,
    performInsert,
    performUpdate,
    performDelete,
    performQuery
 }