const jwt = require('jsonwebtoken');

/* userToken { user_id: number } */

module.exports = function (req, res, next) {
    console.log('the headers in the authorization request are - ', req.body);
   const [tokenType, userToken] = req.headers.authorization.split(' ');
   if (tokenType === 'Bearer') {
      try {
         const tokenData = jwt.verify(userToken, process.env.SECRET_KEY);
         console.log('the request in the auth attr is - ',req);
         req.user_id = tokenData.user_id;
         return next();
      }
      catch (ex) {
         return res.status(401).send(ex);
      }
   }

   return res.status(401).send();
}