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

    create(){
        const sql = `INSERT INTO Utilisateur (nom, prenom, email, date_de_naissance, sexe, ville, password) VALUES ('${Utilisateur.nom}', '${Utilisateur.prenom}', '${Utilisateur.email}', '${Utilisateur.date_de_naissance}', '${Utilisateur.sexe}', ${Utilisateur.ville}, '${Utilisateur.password}' ) `;
        connexion.query(sql, function (err, result) {
            if (err) throw err;
            console.log("table inserted");
          });         
    }
}