-- create burgers database with mySQL

CREATE DATABASE burgers_db;
USE burgers_db;

-- create table in mySQL database

CREATE TABLE burgers (

    id int NOT NULL AUTO_INCREMENT,
    name_of_burger VARCHAR(300) NOT NULL,
    is_eaten BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);