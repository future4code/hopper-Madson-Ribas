USE `Hopper-4314062-madson-pereira`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projetos (
id VARCHAR(5) PRIMARY KEY,
name VARCHAR(50) UNIQUE NOT NULL,
title VARCHAR(50) NOT NULL,
date DATE NOT NULL
);

