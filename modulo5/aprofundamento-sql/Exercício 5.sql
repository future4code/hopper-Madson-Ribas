USE `Hopper-4314062-madson-pereira`;
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Projetos ORDER BY dueDate DESC;

SELECT name, dueDate FROM Projetos ORDER BY dueDate ASC LIMIT 2;