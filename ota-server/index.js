require('dotenv').config();
const express = require('express');
const cors = require('cors');
const expressFileupload = require('express-fileupload');
const mysql = require('mysql');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
//const db = require('./db/db');

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345678',
  database: 'online_travel_agency'
 });


connection.connect(function (err) {
  if (err) console.log(err);
});

const app = express();
const PORT = process.env.PORT || 6789;
process.env.SECRET_KEY = 'omar';


app.use(cors());
//app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//app.use(expressFileupload());
//app.use(multer({dest:'./uploads/'}).single('image'));

app.use(express.static('./uploads'));
app.use(express.static('./client'));



// attributes / middlewares
const userCredentials = require('./attributes/user-credentials.attr');
const quriesAttributes = require('./attributes/query.attribute');
const authorizationAttribute = require('./attributes/authorization.attr');


// storage variable, that leads to the map where images are stored (destination) and a filename

// const storage = multer.diskStorage ({
//   destination: (req,file,callback)=> {
//     callback(null, "./");
//   },
//   filename: function(req,file,callback){
//     const ext = file.mimetype.split("/")[1];
//     callback(null,`uploads/${file.originalname}-{Date.now()}.${ext}`);
//   }
// });
// const upload = multer({
//   storage: storage
// })
let fileName;
let theRequestBody;
app.post('/api/vacation', function (req, res) {
  console.log(req.body);
  return res.send();
  if (req.files && req.files.image) {
    fileName = `${Date.now()}-${req.files.image.name}`;

     req.files['image'].mv(__dirname + `/uploads/${fileName}`, function (err) {
        if (err) {
           return res.status(500).send();
        }
        //res.send();
     });
  } else if (!req.files) {
    theRequestBody=req.body;
    //console.log('the request body is - ',req.body);
  }
  else {
     res.status(500).send();
  }
  if (theRequestBody && fileName) {
    console.log ("this is the console.log - ",fileName,theRequestBody.destination);
    // const [destination,departureDate,returnDate,price,description] = theRequestBody;
    const sqlInsert = "INSERT INTO `ota_vacations` (`ota_vacation_destination`, `ota_vacation_image_url`, `ota_vacation_departure_date`,`ota_vacation_return_date`,`ota_vacation_price`,`ota_vacation_description`) VALUES (?,?,?,?,?,?);"
        connection.query(sqlInsert,[theRequestBody.destination,fileName,theRequestBody.departureDate,theRequestBody.returnDate,theRequestBody.price,theRequestBody.description], (err,result)=> {
      if (err) {
        console.log(err);
        res.send({
          msg:err
        })
      }
      if (result) {
        res.send({
          data: result,
          msg: 'vacation has been added to data base!'
        });
      }
    });   
  }
})


// app.post("/api/vacation",upload.single('image'),(req, res, err) => {
//   console.log('1',req.file,req.body);
//   // if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//   //   res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
//   // } else {
//     const image = req.file.image;
//     //console.log('the vacation req body is - ',req.body);
//     const [destination,departureDate,returnDate,price,description] = req.body;

//     const sqlInsert = "INSERT INTO `ota_vacations` (`ota_vacation_destination`, `ota_vacation_image_url`, `ota_vacation_departure_date`,`ota_vacation_return_date`,`ota_vacation_price`,`ota_vacation_description`) VALUES (?,?,?,?,?,?);"
    
//     connection.query(sqlInsert,[destination,image,departureDate,returnDate,price,description], (err,result)=> {
//       if (err) {
//         console.log(err);
//         res.send({
//           msg:err
//         })
//       }
//       if (result) {
//         res.send({
//           data: result,
//           msg: 'vacation has been added to data base!'
//         });
//       }
//     });   
//   // }
// });



// controllers
const registerAuthCtrl = require('./controllers/register.auth.ctrl');
const loginAuthCtrl = require('./controllers/login.auth.ctrl');
// const userCtrl = require('./controllers/user.ctrl');
const vacationCtrl = require('./controllers/vacation.ctrl');


//app.use('/auth', userCredentials, loginAuthCtrl);

app.use('/registerAuth', registerAuthCtrl);
app.use('/loginAuth', userCredentials, loginAuthCtrl);

const middlewares = [
  // authorizationAttribute,
  quriesAttributes.fieldsQuery
];

app.get('/api/vacations', (req,res)=>{
  const sqlSelect = "SELECT * FROM `ota_vacations`";
  connection.query(sqlSelect,(err,result)=> {
      res.send(result);
  });
})

app.use('/register', ...middlewares, registerAuthCtrl);
app.use('/login', ...middlewares, loginAuthCtrl);
//app.use('/api/vacations',...middlewares, vacationCtrl);





app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));