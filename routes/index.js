// Modules
const express = require('express');

// Middlewares
const router = express.Router();

// Routes
router.get('/', function (req, res) {
    res.render('home')
});

router.get('/login', function (req, res){
    res.render('login', {
        style: '/css/composant/login.css'
    })
});

router.get('/signin', function (req, res) {
    res.render('signin', {
        style : '/css/composant/login.css'
    })
})

router.get('*', function (req, res) {
    res.status(404)
    .send('Unknow Adress');
});

// Export du fichier
module.exports = router;