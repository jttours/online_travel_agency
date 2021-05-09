require('dotenv').config();
const jwt = require('jsonwebtoken');



/* userToken { user_id: number } */

module.exports = function (req, res, next) {
   console.log('the request is -  ',req.headers);
   const [tokenType, userToken] = req.headers.authorization.split(' ');
   if (tokenType === 'Bearer') {
      try {
         const tokenData = jwt.verify(userToken, process.env.SECRET_KEY);
         req.user_id = tokenData.user_id;
         return next();
      }
      catch (ex) {
         return res.status(401).send(ex);
      }
   }

   return res.status(401).send();
}
