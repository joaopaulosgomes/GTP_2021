

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema CarparkDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CarparkDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CarparkDB` ;
USE `CarparkDB` ;

-- -----------------------------------------------------
-- Table `CarparkDB`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `phone_number` VARCHAR(45) NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `make` VARCHAR(45) NOT NULL DEFAULT 'UNDEFINED',
  `model` VARCHAR(45) NULL,
  `type` VARCHAR(45) NOT NULL DEFAULT 'UNDEFINED',
  `number_plate` VARCHAR(45) NOT NULL,
  `colour` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `number_plate_UNIQUE` (`number_plate` ASC),
  INDEX `fk_vehicle_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_vehicle_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `from_date` VARCHAR(255) NOT NULL,
  `numb_days` INT NOT NULL DEFAULT 1,
  `type` VARCHAR(45) NOT NULL DEFAULT 'UNDEFINED',
  `price` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `status` VARCHAR(45) NOT NULL DEFAULT 'BOOKED',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `vehicle_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservation_users1_idx` (`user_id` ASC),
  INDEX `fk_reservation_vehicle1_idx` (`vehicle_id` ASC),
  CONSTRAINT `fk_reservation_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservation_vehicle1`
    FOREIGN KEY (`vehicle_id`)
    REFERENCES `CarparkDB`.`vehicle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`carwash`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`carwash` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(255) NOT NULL,
  `type` VARCHAR(45) NOT NULL DEFAULT 'UNDEFINED',
  `price` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `status` VARCHAR(45) NOT NULL DEFAULT 'BOOKED',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `vehicle_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carwash_users1_idx` (`user_id` ASC),
  INDEX `fk_carwash_vehicle1_idx` (`vehicle_id` ASC),
  CONSTRAINT `fk_carwash_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carwash_vehicle1`
    FOREIGN KEY (`vehicle_id`)
    REFERENCES `CarparkDB`.`vehicle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`membership`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`membership` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `from_date` VARCHAR(255) NOT NULL,
  `period` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'BOOKED',
  `price` DECIMAL(5,2) NULL DEFAULT 0,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_membership_users1_idx` (`user_id` ASC),
  CONSTRAINT `fk_membership_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`garage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`garage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `service` VARCHAR(45) NOT NULL DEFAULT 'UNDEFINED',
  `date` DATE NOT NULL,
  `price` DECIMAL(5,2) NOT NULL DEFAULT 0,
  `note` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `membership_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_garage_membership1_idx` (`membership_id` ASC),
  CONSTRAINT `fk_garage_membership1`
    FOREIGN KEY (`membership_id`)
    REFERENCES `CarparkDB`.`membership` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`invoice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`invoice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE ,
  `note` TEXT NULL,
  `user_id` INT NOT NULL,
  `reservation_id` INT NOT NULL,
  `membership_id` INT NOT NULL,
  `carwash_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_invoice_users1_idx` (`user_id` ASC),
  INDEX `fk_invoice_reservation1_idx` (`reservation_id` ASC),
  INDEX `fk_invoice_membership1_idx` (`membership_id` ASC),
  INDEX `fk_invoice_carwash1_idx` (`carwash_id` ASC),
  CONSTRAINT `fk_invoice_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_invoice_reservation1`
    FOREIGN KEY (`reservation_id`)
    REFERENCES `CarparkDB`.`reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_invoice_membership1`
    FOREIGN KEY (`membership_id`)
    REFERENCES `CarparkDB`.`membership` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_invoice_carwash1`
    FOREIGN KEY (`carwash_id`)
    REFERENCES `CarparkDB`.`carwash` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CarparkDB`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CarparkDB`.`login` (
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `user_id` INT,
  PRIMARY KEY (`username`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  INDEX `fk_login_users1_idx` (`user_id` ASC),
  CONSTRAINT `fk_login_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `CarparkDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
