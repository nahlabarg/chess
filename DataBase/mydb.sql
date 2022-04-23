
CREATE TABLE actualite (
  id_actualite INT PRIMARY KEY ,
  libelle VARCHAR(45) NULL
);
 

-- -----------------------------------------------------
CREATE TABLE client (
  nom_client VARCHAR(45) NOT NULL,
  username_client VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL ,
  c_password VARCHAR(45) NOT NULL
) ;


-- -----------------------------------------------------
CREATE TABLE contact (
  id_contact INT PRIMARY KEY NOT NULL,
  tel_contact INT(8) NULL,
  insta_contact VARCHAR(255) NULL,
  FB_contact VARCHAR(45) NULL ) ;
 

-- -----------------------------------------------------
CREATE TABLE centrrDeCours (
  id_centreDeCours INT PRIMARY KEY NOT NULL,
  cours LONGTEXT NULL,
  compte_id_compte INT NOT NULL ) ;
 
-- -----------------------------------------------------
CREATE TABLE centreDeJeux (
  id_centreDeJeux INT PRIMARY KEY NOT NULL,
  lien_chess VARCHAR(45) NULL,
  note INT NULL ) ;
 

-- -----------------------------------------------------
CREATE TABLE centreDeApplication (
  id_centreDeApplication INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom_app VARCHAR(45) NULL,
  lien VARCHAR(45) NULL,
  note INT NULL ) ;
