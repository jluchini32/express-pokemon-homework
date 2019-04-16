const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemonController = require('./controllers/pokemonController.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/pokemon', pokemonController)
app.use(express.static('./public'))









app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
  });
  