-- Create Database
Create Database IF NOT EXISTS media;
Select database();
USE media;


/* Create Media Type Table */
CREATE TABLE IF NOT EXISTS media_type (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(200),
   description VARCHAR(1000),
   added_on DATETIME
);


/* Create Genre Table */
CREATE TABLE IF NOT EXISTS genre (
	id INT AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(200),
	`description` VARCHAR(1000),
	`color` varchar(50),
	`image` varchar(500),
	`read_only` bit,
	added_on datetime
);


/* Create Audio file Table */
CREATE TABLE IF NOT EXISTS audio (
	id INT AUTO_INCREMENT PRIMARY KEY,
	file_name VARCHAR(200),
	`description` VARCHAR(1000),
	`path` varchar(500),
	extension varchar(50),
	genre int,
	added_on DATETIME
);
