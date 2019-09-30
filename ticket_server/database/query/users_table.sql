CREATE TABLE `tickets_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `role` VARCHAR(50) NULL,
  `username` VARCHAR(200) NULL,
  PRIMARY KEY (`id`));
