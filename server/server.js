const express = require('express');
const app = express();
const configExpress = require('./config/express');
const configRoutes = require('./routes');
const {db} = require('./db');

configExpress(app);
configRoutes(app);

db.sync()
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log(`Server listening on port ${app.get('port')} in ${app.get('env')}\
      mode...`);
    })
  }).catch(err => console.log(err));
