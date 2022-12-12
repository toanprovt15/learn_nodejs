const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // app.get('/news', (req, res) => {
  //   console.log(req.query.q);
  //   res.render('news');
  // })
  app.use('/news', newsRouter);
  app.use('/search', siteRouter);
  app.use('/', siteRouter);
}
module.exports = route;
