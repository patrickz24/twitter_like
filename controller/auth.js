module.exports = {
    
    isLoggedIn (req, res, next) {  //Si user êtes connecté, continuez avec les routes
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/connexion'); //Si vous n'êtes pas connecté, je vais le redirect a connexion
    },

    isNotloggedIn (req, res, next) { //Si vous n'êtes pas connecté, continuez avec les routes
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/profile');
    }

};

