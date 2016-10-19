const restaurantRouter = () => {};

module.exports = app => {
  // app.use('/', restaurantRouter);
  app.use('/api', restaurantRouter);

  app.route('/:url(api|bower_components|assests|app)/*').get((req, res) => {
    res.sendStatus(404);
  });

  app.route('/*').get((req, res) => {
    res.sendFile(`${app.get('clientPath')}/index.html`);
  });
};
