const express = require('express');
const app = express();
const configExpress = require('./config/express');

configExpress(app);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')} in ${app.get('env')}\
  mode...`);
})
