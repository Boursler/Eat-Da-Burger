-- Create a burgers table with these fields:
--
--
-- id: an auto incrementing int that serves as the primary key.
--
-- burger_name: a string.
--
-- devoured: a boolean.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers(
id INTEGER NOT NULL auto_increment,
PRIMARY KEY (id),
burger_name VARCHAR(255),
devoured BOOLEAN not null default 0
)
