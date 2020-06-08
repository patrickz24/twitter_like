const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true  //nous recevons l'objet req
}, async (req, email, password, done) => {
  const rows = await pool.query('SELECT * FROM Utilisateur WHERE email = ?', [email]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPassword = await helpers.matchPassword(password, user.password)
    if (validPassword) {
      done(null, user, req.flash('success', 'Bienvenue ' + user.prenom));
    } else {
      done(null, false, req.flash('message', 'Mot de passe incorrect'));
    }
  } else {
    return done(null, false, req.flash('message', "Le email d'utilisateur n'existe pas"));
  }
}));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'nom',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, nom, password, done) => {
  const { prenom } = req.body;
  const { email } = req.body;
  const { date_de_naissance } = req.body;
  const { sexe } = req.body;
  const { ville } = req.body;
  let newUser = {
    nom,
    prenom,
    email,
    date_de_naissance,
    sexe,
    ville,
    password
  };
  newUser.password = await helpers.encryptPassword(password);
  // Enregistrement dans la base de données
  const result = await pool.query('INSERT INTO Utilisateur SET ? ', newUser);
  newUser.id = result.insertId;
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM Utilisateur WHERE id = ?', [id]);
  done(null, rows[0]);
});

