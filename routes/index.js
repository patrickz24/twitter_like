// Modules
const express = require('express');

// Middlewares
const router = express.Router();

// Routes
router.get('/', function (req, res) {
    res.render('home');
});

router.get('*', function (req, res) {
    res.status.length(404).send('error');
});

// Export du fichier
module.exports = router;