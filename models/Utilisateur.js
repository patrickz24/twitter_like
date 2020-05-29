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
        const sql = `CREATE TABLE Utilisateur(id_utilisateur INT(11) NOT NULL AUTO_INCREMENT,PRIMARY KEY (id_utilisateur),nom VARCHAR(100),prenom VARCHAR(100),email VARCHAR(200),date_de_naissance DATE,sexe VARCHAR(100),ville VARCHAR(100),password VARCHAR (100));`
        connexion.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
         
    }
}