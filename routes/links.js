const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../controller/auth');

/***************************************ROUTE POUR INSERER TWEET********************************************************* */

router.get('/add', async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet WHERE id_utilisateur = ?', [req.user.id]);
    res.render('links/add', { tweets});
});

router.post('/add', async (req, res) => {
    const { hashtag, url, text } = req.body;
    const newTweet = {
        hashtag,
        url,
        text,
        id_utilisateur: req.user.id
    };
    await pool.query('INSERT INTO Tweet set ?', [newTweet]);
    req.flash('success', 'Tweet enregistré avec succès');
    res.redirect('/profile');
});



/***************************************ROUTE POUR SUPPRIME TWEET********************************************************* */
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Tweet WHERE id = ?', [id]);
    req.flash('success', 'Tweet supprimé avec succès');
    res.redirect('/profile');
});

/*************************************ROUTE POUR EDITER TWEETS*********************************************************** */
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const tweets = await pool.query('SELECT * FROM Tweet WHERE id = ?', [id]);
    //console.log(tweets);
    res.render('links/edit', {tweet: tweets[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { hashtag, text, url} = req.body; 
    const newTweet = {
        hashtag,
        url,
        text,
    };
    await pool.query('UPDATE Tweet set ? WHERE id = ?', [newTweet, id]);
    req.flash('success', 'Tweet mis à jour avec succès');
    res.redirect('/profile');
});
/***************************************ROUTE POUR EDITER UTILISATEUR****************************************************** */


router.get('/editer/:id', async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM Utilisateur WHERE id = ?', [id]);
    //console.log(user);
    res.render('compte', {utilisateur: user[0]});
});

router.post('/editer/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, date_de_naissance, sexe, ville, password} = req.body; 
    const newUser = {
        nom, 
        prenom, 
        email, 
        date_de_naissance, 
        sexe, 
        ville, 
        password
    };
    await pool.query('UPDATE Utilisateur set ? WHERE id = ?', [newUser, id]);
    req.flash('success', "L'Utilisateur mis à jour avec succès");
    res.redirect('/profile');
});

/**pas encore finis***
 * 
 * router.get('/editer/:id', passport.authenticate('local.signup', async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM Utilisateur WHERE id = ?', [id]);
    //console.log(user);
    res.render('compte', {utilisateur: user[0]});
}));

router.post('/editer/:id', passport.authenticate('local.signup', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, date_de_naissance, sexe, ville, password} = req.body; 
    const newUser = {
        nom, 
        prenom, 
        email, 
        date_de_naissance, 
        sexe, 
        ville, 
        password
    };
    await pool.query('UPDATE Utilisateur set ? WHERE id = ?', [newUser, id]);
    req.flash('success', "L'Utilisateur mis à jour avec succès");
    res.redirect('/profile');
}));
 * 
 * 
 */



/*********************************************************************************************** */
router.get('/', isLoggedIn, async (req, res) => {
    const tweets = await pool.query('SELECT * FROM Tweet WHERE id_utilisateur = ?', [req.user.id]);
    res.render('links/list', { tweets });
});

router.get('/popo', isLoggedIn, async (req, res) => {
    const pipi = await pool.query('SELECT * FROM Tweet WHERE id_utilisateur = ?', [req.user.id]);
    res.render('popo', { pipi});
    console.log(pipi);

});



module.exports = router;
