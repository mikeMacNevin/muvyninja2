const express = require('express');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// mongoose

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/seefilm", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// handlebars
  app.engine('handlebars', exphbs({
   defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
  
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// index
app.get('/', (req, res) => {
    const title = 'seefilm';
    res.render('index', {
      title: "SeeFilm"
    });
  });

app.get('/find', (req, res) => {
    res.render('find');
  });

const port = 4000;

app.listen(port, () =>{
  console.log(`Mike: Server started on port ${port}`);
});