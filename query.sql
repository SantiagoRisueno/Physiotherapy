CREATE TABLE `physical_therapy_db`.`appointment` ( `idAppointment` INT(11) NOT NULL AUTO_INCREMENT , `idDoctor` INT(11) NOT NULL , `idPatient` INT(11) NOT NULL , `dateAppointment` DATETIME NOT NULL , PRIMARY KEY (`idAppointment`)) ENGINE = InnoDB;

CREATE TABLE `physical_therapy_db`.`doctor` ( `idDoctor` INT(11) NOT NULL AUTO_INCREMENT , `nameDoctor` VARCHAR(32) NOT NULL , `phoneDoctor` VARCHAR(16) NOT NULL , `emailDoctor` VARCHAR(32) NOT NULL , PRIMARY KEY (`idDoctor`)) ENGINE = InnoDB;

CREATE TABLE `physical_therapy_db`.`patient` ( `idPatient` INT(11) NOT NULL AUTO_INCREMENT , `namePatient` VARCHAR(32) NOT NULL , `phonePatient` VARCHAR(16) NOT NULL , `emailPatient` VARCHAR(32) NOT NULL , PRIMARY KEY (`idPatient`)) ENGINE = InnoDB;

CREATE TABLE `physical_therapy_db`.`users` ( `idUser` INT(11) NOT NULL AUTO_INCREMENT , `emailUser` VARCHAR(32) NOT NULL , `passwordUser` VARCHAR(32) NOT NULL , `roleUser` VARCHAR(16) NOT NULL , PRIMARY KEY (`idUser`)) ENGINE = InnoDB;


INSERT INTO `users` (`emailUser`, `passwordUser`, `roleUser`) VALUES ('nelly_jaramillo@azur.com', '12345', 'admin');
INSERT INTO `users` (`emailUser`, `passwordUser`, `roleUser`) VALUES ('leonardo_cruz@azur.com', '12345', 'admin');

INSERT INTO `doctor` (`nameDoctor`, `phoneDoctor`, `emailDoctor`) VALUES ('Nelly Mariela Jaramillo Zapata', '0996784512', 'nelly_jaramillo@azur.com');
INSERT INTO `doctor` (`nameDoctor`, `phoneDoctor`, `emailDoctor`) VALUES ('Leandro René De la Cruz Palma', '0996785512', 'leonardo_cruz@azur.com');