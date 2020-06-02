const Utilisateur = require('../models/Utilisateur.js')


exports.createUtilisateur = (req, res) => {
    Utilisateur.create(req.body)
    res.send('Félicitation vous êtes bien inscrit')
}

