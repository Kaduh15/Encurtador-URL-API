-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema URLs_database
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `URLs_database` ;

-- -----------------------------------------------------
-- Schema URLs_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `URLs_database` DEFAULT CHARACTER SET utf8 ;
USE `URLs_database` ;

-- -----------------------------------------------------
-- Table `URLs_database`.`URL`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `URLs_database`.`URL` ;

CREATE TABLE IF NOT EXISTS `URLs_database`.`URL` (
  `shortURL` VARCHAR(6) NOT NULL,
  `originalURL` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`shortURL`),
  UNIQUE INDEX `shortURL_UNIQUE` (`shortURL` ASC)
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `URLs_database`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `URLs_database`.`access` ;

CREATE TABLE IF NOT EXISTS `URLs_database`.`access` (
  `id_access` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `shortURL` VARCHAR(6) NOT NULL,
  `type_sys` VARCHAR(10) NOT NULL,
  `ip` VARCHAR(13) NOT NULL,
  `date` TIMESTAMP NOT NULL,
  CONSTRAINT `shortURL`
    FOREIGN KEY (`shortURL`)
    REFERENCES `URLs_database`.`URL` (`shortURL`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;