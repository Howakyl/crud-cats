const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

app.set('view engine' , 'ejs');

//SET CAT CONTROLLER 
const catsController = require('./controllers/catsController');

////////////////////////////////////////

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));

///////////////////////////////////////

//HOME
app.get('/' , (req,res) => res.render('index'));

//PUT /cats ROUTE HERE
app.use('/cats', catsController);

///////////////////////////////////////

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}.`));