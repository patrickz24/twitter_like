

const moment = require ('moment');

const hel = {};

hel.timeago = timestamp => {
   return moment(timestamp).format('LL');
};



module.exports = hel;

