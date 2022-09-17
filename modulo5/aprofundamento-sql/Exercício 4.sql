USE `Hopper-4314062-madson-pereira`;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Projetos ADD description VARCHAR(250) NOT NULL;
DESCRIBE Projetos;

UPDATE Projetos SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = "001";
UPDATE Projetos SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." 
WHERE id = "002";
UPDATE Projetos SET description = "Projeto de rede de comunicação da Labenu." 
WHERE id = "003";

DESCRIBE Projetos;
