const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const morgan = require('morgan');
const { query } = require('express');
const app = express();
const port = 3005;
// create "middleware"
// app.use(morgan('combined'));

const route = require('./routes');

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
                                                                                app.set('view engine', 'hbs');
                                                                                app.set('views', path.join(__dirname, 'resources\\views'));
                                                                                //console.log('PATH: ', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

      app.use(
        express.urlencoded({
          extended: true,
        }),
);
app.use(express.json());

// app.get('/search',(req, res) =>
// {
//   res.render('search');
// });
//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
