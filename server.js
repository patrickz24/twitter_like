// Modules
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

// Les routes
const router = require("./routes");

// Instanciation serveur Express
const server = express();

// Moteur de templates 
server.engine('handlebars', exphbs());
server.set('view engine', 'handlebars');
 
server.listen(8080);







