const connexion = require('../db.js')


class Utilisateur{
    constructor(props){

        this.nom = props.nom;
        this.prenom= props.prenom;
        this.email = props.email;
        this.date_de_naissance = props.date_de_naissance;
        this.sexe = props.sexe;
        this.ville = props.ville;
        this.password = props.password;
    }

    static create(props){
        const sql = `INSERT INTO Utilisateurs (nom, prenom, email, date_de_naissance, sexe, ville, password) VALUES ('${props.nom}', '${props.prenom}', '${props.email}', '${props.date_de_naissance}', '${props.sexe}', '${props.ville}', '${props.password}' ) `;
        connexion.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Success");
        });         
    }
}

module.exports = Utilisateur
