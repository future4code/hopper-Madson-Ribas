USE `Hopper-4314062-madson-pereira`;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Projetos DROP COLUMN title;

DESCRIBE Projetos;

ALTER TABLE Projetos CHANGE date dueDate DATE NOT NULL;

ALTER TABLE funcionarios MODIFY email VARCHAR(100) NOT NULL UNIQUE; 

DESCRIBE Funcionarios;


 