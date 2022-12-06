const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const morgan = require('morgan');
const app = express();
const port = 3005
// create "middleware"
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
//console.log('PATH: ', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,"public")));



app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})