CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` Int( 30 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL,
	`date` TIMESTAMP NOT NULL,
	
	PRIMARY KEY ( `id` ) );