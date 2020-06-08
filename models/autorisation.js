const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');
const { isNotloggedIn } = require('../controller/auth');

const autorisation = {};

/*-------------------Page Test-----------------------------------------*/

autorisation.like = (req, res) =>{
    res.send('page LIKE');
 }

/*-------------------Page Connexion-----------------------------------*/

autorisation.connexion = (req, res) => {
    res.render('auth/signin');
  }
  

/*-------------------Page Inscription---------------------------------*/
autorisation.inscription = (req, res) => {
    res.render('auth/signup');
  }

  

/*-------------------------Se deconnecter ----------------------------*/
autorisation.deconnecter = (req, res) => {
    req.logOut();
    res.redirect('/');
  }

  
/*-------------------------------------------------------------------*/


module.exports = autorisation;