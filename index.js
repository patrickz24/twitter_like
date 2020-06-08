const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');


const { database } = require('./keys');

// Intialisations
const app = express();
require('./controller/passport');

// configuration del servidor et handlebars
app.set('port', process.env.PORT || 4000);  //s'il y a un port, il le prend, sinon il en faut 4 mille
app.set('views', path.join(__dirname, 'views')); //localiser le dossier views
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'), //cette méthode rejoint les répertoires
  partialsDir: path.join(app.get('views'), 'partials'), 
  extname: '.hbs',
  helpers: require('./controller/handlebars')
  
}));
app.set('view engine', '.hbs');

// Middlewares (fonctions exécutées lorsque le client demande quelque chose au serveur)
morgan(":method :url :status :res[content-length] - :response-time ms");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'gmnmiguel',
  resave: false,                 //flash y session trabajan en conjunto y gracas a expres-mysql-session podemos guardar session en la bd
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());

// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash('message');
  app.locals.success = req.flash('success');
  app.locals.user = req.user;
  //app.locals.tweets = req.tweets;
  next(); 
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/tweets', require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Serveur dans le port', app.get('port'));
});
