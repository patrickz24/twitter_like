
const timeago = require('timeago.js'); //convertir date 2 minutes, mois, jours avant
const timeagoInstance = timeago();

const helpers = {};

helpers.timeago = (savedTimestamp) => {  //timestamp est la date que MySQL enregistre 
    return timeagoInstance.format(savedTimestamp);  //utilisé la méthode du format pour le convertir
};


/*
const moment = require ('moment');

const helpers = {};

helpers.timeago = timestamp => {
   return moment(timestamp).format('LL');
};

*/

module.exports = helpers;
