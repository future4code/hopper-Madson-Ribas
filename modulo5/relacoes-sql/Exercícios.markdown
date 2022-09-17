CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- Chave estrangeira é uma chave única passada de uma tabela para outra como referência.

INSERT INTO Rating VALUES ("001", "Como não amar esses dois? Essa história de trocar de corpo,
já é bastante clichê nos filmes americanos, mas o Brasil fez uma adaptação muito boa,
Tony Ramos fez um ótimo papel de homem feminino, convenceu bastante. O Filme é bom,
o resultado a bilheteria nacional comprova.", 8, "001"),
("002", "Perfeito exemplo de como a produção interfere na obra do diretor. No caso,
foi negativo, pois o Jorge Furtado e a Ana Luiza Azevedo já fizeram trabalhos melhores.
O que salvou foi o humor pois esses dois sabem escrever bem.", 2, "002"),
("003", "Um dos melhores filmes brasileiros já produzidos.", 9.5, "003"),
("004", "O filme tem um bom humor, Wagner Moura já começa a ter destaque desde esse filme,
 vale a pena assistir.", 8.2, "004");
 
 INSERT INTO Rating VALUES ("007","O filme conta a história de Buzz Lightyear no início de sua carreira como
 patrulheiro espacial. Muito bom.", 9.7, "007");
 
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314062-madson-pereira`.
-- `Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	
-- A query falhou pois a chave estrangeira "007" não existe na tabela Movie.

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id = "002";

-- Não foi possível deletar o filme. Não podemos apagar a chave estrangeira (id) pois ela tem relação com a tabela Rating.
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Hopper-4314062-madson-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

 CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- Essa tabela relaciona os atores com os filmes que eles participaram, unindo a id dos atores e dos filmes

INSERT INTO Actor VALUES ("005", "Wagner Moura", "1976-06-27", "male"),
("006", "Ana Luiza Azevedo", "1959-11-24", "female");

INSERT INTO MovieCast VALUES ("001", "001"),
("003", "002"),
("002", "003"),
("004", "004"),
("004", "005"),
("002", "006");

INSERT INTO MovieCast VALUES ("009", "001");

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314062-madson-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Não foi possível criar a relação. A chave estrangeira não é válida.

DELETE FROM Actor WHERE id = "005";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Hopper-4314062-madson-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- Não foi possível deletar o ator. Não podemos apagar a chave estrangeira (id) pois ela tem relação com a tabela MovieCast.

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- O operador ON diz onde vai ser feito o JOIN, no caso onde Movie.id é igual a Rating.movie_id

SELECT Movie.id, Movie.title, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;