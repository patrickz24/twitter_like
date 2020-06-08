const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');
const { isLoggedIn } = require('../controller/auth');
const autorisation = require ('../models/autorisation');



/*-----------------------Route like---------------------------------------*/

router.post('/like/:id/like', autorisation.like);

/*-------------------------Page Connexion --------------------------------*/


router.get('/connexion', autorisation.connexion);

router.post('/connexion', (req, res, next) => {
  req.check('email', "Email d'utilisateur est nécessaire").notEmpty();
  req.check('password', 'Mot de passe requis').notEmpty();
  const errors = req.validationErrors();
  if (errors.length > 0) {
    req.flash('message', errors[0].msg);
    res.redirect('/connexion');
  }
  passport.authenticate('local.signin', {  //appeler la méthode d'authentification
    successRedirect: '/profile',
    failureRedirect: '/connexion',
    failureFlash: true
  })(req, res, next);
});

/*-------------------------Page inscription ---------------------------*/

router.get('/inscription', autorisation.inscription);

router.post('/inscription', passport.authenticate('local.signup', {  
  successRedirect: '/profile',
  failureRedirect: '/inscription',
  failureFlash: true
}));



/*-------------------------Se deconnecter ----------------------------*/

router.get('/logout', autorisation.deconnecter);





module.exports = router;
