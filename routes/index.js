// Modules
const express = require('express');

// Middlewares
const router = express.Router();

// Routes
router.get('/', function (req, res) {
    res.render('home')
});

router.get('/connexion', function (req, res){
    res.render('connexion', {
        style: '/css/composant/connexion.css'
    })
});

router.get('*', function (req, res) {
    res.status(404)
    .send('Unknow Request');
});

// Export du fichier
module.exports = router;