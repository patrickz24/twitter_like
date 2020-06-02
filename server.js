// Modules
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

// Les routes
const router = require("./routes/authRoutes");

// Instanciation serveur Express
const server = express();

//fichier statique
server.use(express.static('assets'));

//config body-parser
server.use(bodyParser.json())
server.use(bodyParser.text())
server.use(bodyParser.urlencoded({extended: false}));

//router
server.use(router);


// Moteur de templates 
server.engine('handlebars', exphbs());
server.set('view engine', 'handlebars');
 
server.listen(8080);







