CREATE DATABASE twitter_liker;

USE twitter_liker;

SELECT * FROM `twitter_liker`.`Utilisateur`;

CREATE TABLE Utilisateur(
id INT(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id_utilisateur),
nom VARCHAR(100),
prenom VARCHAR(100),
email VARCHAR(200),
date_de_naissance DATE,
sexe VARCHAR(100),
ville VARCHAR(100),
password VARCHAR (100)
);

CREATE TABLE Tweet(
id INT (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
hashtag VARCHAR (100),
url VARCHAR(255),
text VARCHAR(140),
temps timestamp NOT NULL DEFAULT current_timestamp,
likes NUMBER DEFAULT: 0,
id_utilisateur INT,
FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id)) ENGINE INNODB;


CREATE TABLE  Liker(
id INT (11) AUTO_INCREMENT,
PRIMARY KEY (id),
id_tweets INT,
id_utilisateur INT,
FOREIGN KEY (id_tweets) REFERENCES Tweet (id),
FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id)) ENGINE INNODB;



DESCRIBE Utilisateur;