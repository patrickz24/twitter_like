// Modules
const express = require('express');
// const authController = require('../controllers/authController.js')

// Middlewares
const router = express.Router();


// Routes
router.get('/', function (req, res) {
    res.render('home')
});

router.get('*', function (req, res) {
    res.status(404)
    .send('Sorry unknow address ');
});

// Export du fichier
module.exports = router;