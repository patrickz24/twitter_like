


// Modules
const express = require('express');
const authController = require('../controllers/authController.js')

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
        style : '/css/composant/signin.css'
    })
})

router.post('/signin', authController.createUtilisateur)

router.get('*', function (req, res) {
    res.status(404)
    .send('Unknow Address');
});

// Export du fichier
module.exports = router;