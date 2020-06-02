const express = require('express')
const server = express()
const authRouter = express.Router();
const authController = require('../controllers/authController.js')
// const authRouter = require('../routes/index.js')
// const Utilisateur = require('../models/Utilisateur.js')
const { check, validationResult } = require('express-validator');

server.use(express.json())

authRouter.get('/login', function (req, res){
    res.render('login', {
        style: '/css/composant/login.css'
    })
});

authRouter.get('/signin', function (req, res) {
    res.render('signin', {
        style : '/css/composant/signin.css'
    })
})

authRouter.post('/signin', [
    // username must be an email
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 6 })
  ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      
      res.redirect('/signin');
      return console.log('redirect');
      
    } else {
      authController.createUtilisateur(req, res)
      return console.log("création de l'utilisateur");
      
    }
   
  });

module.exports = authRouter