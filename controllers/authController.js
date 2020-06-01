const Utilisateur = require('../models/Utilisateur.js')

exports.createUtilisateur = (req, res) => {
    // let utilisateur = new Utilisateur(req.body)
    // console.log(utilisateur)
    Utilisateur.create(req.body)
    res.send('ok')
}