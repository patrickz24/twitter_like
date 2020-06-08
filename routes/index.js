const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../controller/auth');

/*-----------------------------------ROUTE SERVEUR---------------------------------------------------*/
router.get('/', async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet', [req.id]);
    //console.log(tweets)
    res.render('index', { tweets});
});

/*------------------------------------ROUTE TOUS LE TWEETS utilisateur--------------------------------------------------*/
router.get('/tweet', isLoggedIn, async (req, res) => {
  let tweets = await pool.query('SELECT * FROM Tweet WHERE id_utilisateur = ?', [req.user.id]);
  res.render('tweet', { tweets });
  
});

/*---------------------------------------ROUTE PROFIL  UTILISATEURS-----------------------------------------------*/
router.get('/profil_utilisateur',isLoggedIn, async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet', [req.user.id]);
    //console.log(tweets)
    res.render('profil', { tweets});
});

/*---------------------------------------ROUTE PROFIL ou ACCUEIL---------------------------------------------------*/
router.get('/profile', isLoggedIn, async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet', [req.user.id]);
    //tweets.views = tweets.views + 1;
    //await tweets.save();
    res.render('profile', { tweets});
  });


/****pas encore finis**
 * 
 * 
 * router.get('/profile', isLoggedIn, async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet', [req.user.id]);
    res.render('profile', { tweets});
    pipi = null;
    const pipi = await pool.query('SELECT * FROM Tweet WHERE id_utilisateur = ?', [req.user.id], (req, res) => {  
    res.render('popo', { pipi});
    console.log(pipi);
  });
 
});
 */


module.exports = router;