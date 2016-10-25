const restaurantRouter = require('./api/restaurant');
const userRouter = require('./api/user');

module.exports = app => {
  // app.use('/', restaurantRouter);
  app.use('/api/restaurants', restaurantRouter);
  app.use('/api/users', userRouter);

  app.route('/:url(api|bower_components|assests|app)/*').get((req, res) => {
    res.sendStatus(404);
  });

  app.route('/').get((req, res) => {
    res.sendFile(`${app.get('clientPath')}/index.html`);
  });
};
