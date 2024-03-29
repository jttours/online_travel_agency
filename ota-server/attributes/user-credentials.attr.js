const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
   if (req.headers.authorization) {
      const [tokenType, userToken] = req.headers.authorization.split(' ');
      if (tokenType === 'Bearer') {
         try {
            const tokenData = jwt.verify(userToken, process.env.SECRET_KEY);
            req.user_id = tokenData.user_id;
         }
         catch (ex) {
            req.user_id = null;
         }
      }
   }
   next();
}
