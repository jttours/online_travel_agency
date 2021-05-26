require('dotenv').config();
const express = require('express');
const cors = require('cors');
const expressFileupload = require('express-fileupload');
const mysql = require('mysql');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
// var upload = multer({dest:'uploads/'});
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
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//app.use(expressFileupload());
//app.use(multer({dest:'./uploads/'}).single('image'));


app.use(express.static('./client'));
app.use(express.static(__dirname + '/'));



// attributes / middlewares
const userCredentials = require('./attributes/user-credentials.attr');
const quriesAttributes = require('./attributes/query.attribute');
const authorizationAttribute = require('./attributes/authorization.attr');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './');
   },
  filename: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      cb(null , `uploads/${file.originalname}-${Date.now()}.${ext}`);
  }
});

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
const upload = multer({
  storage: storage
})




app.post("/api/vacation",upload.single('image'),(req, res, err) => {
  console.log('1',req.file,req.body);
  // if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
  //   res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
  // } else {
    const image = req.file.filename;
    //console.log('the vacation req body is - ',req.body);
    
    const obj = JSON.parse(JSON.stringify(req.body));
    //console.log(obj);
    
    //const [destination,departureDate,returnDate,price,description] = obj;

    console.log(obj.destination,image,obj.departureDate,obj.returnDate,obj.price,obj.description);

    const sqlInsert = "INSERT INTO `ota_vacations` (`ota_vacation_destination`, `ota_vacation_image_url`, `ota_vacation_departure_date`,`ota_vacation_return_date`,`ota_vacation_price`,`ota_vacation_description`) VALUES (?,?,?,?,?,?);"
    
    connection.query(sqlInsert,[obj.destination,image,obj.departureDate,obj.returnDate,obj.price,obj.description], (err,result)=> {
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
  // }
});



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