CREATE TABLE teams(
	team_id serial PRIMARY KEY,
	team_name VARCHAR(100) UNIQUE NOT NULL,
    games_played INT NOT NULL CHECK (games_played = (wins + losses + ties)),
	wins INT NOT NULL CHECK (wins >= 0),
	losses INT NOT NULL CHECK (losses >= 0),
	ties INT NOT NULL CHECK (ties >= 0),
	points INT NOT NULL CHECK (points = ((wins * 2) + (ties * 1))));

INSERT INTO teams (team_name, games_played, wins, losses, ties, points)
VALUES 
	('Empire', 11, 3, 7, 1, 7),
	('Rebel Alliance', 10, 5, 2, 3, 13),
	('Everybody Else', 10, 4, 4, 2, 10);

CREATE TABLE player_stats(
	player_id serial PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
    games_played INT NOT NULL CHECK (games_played >= 0), 
        -- teams.games_played not easily referenced, or else would add restriction that player_stats.games_played can't be greater than teams.games_played
	goals INT NOT NULL CHECK (goals >= 0),
	assists INT NOT NULL CHECK (goals >= 0),
	points INT NOT NULL CHECK (points = (goals + assists)),
	team_id INT NOT NULL,
    CONSTRAINT player_stats_team_id_fkey FOREIGN KEY (team_id)
        REFERENCES teams(team_id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION);

INSERT INTO player_stats (first_name, last_name, games_played, goals, assists, points, team_id)
VALUES 
	('Darth', 'Vader', 11, 5, 5, 10, 1),
	('Luke', 'Skywalker', 9, 7, 2, 9, 2),
	('Grand Moff', 'Tarkin', 9, 0, 3, 3, 1),
	('Han', 'Solo', 8, 3, 10, 13, 2),
	('Tuscan', 'Raider',10, 9, 1, 10, 3),
	('Leia', 'Organa',10, 4, 12, 16, 2),
	('Admiral', 'Ozzel', 8, 3, 5, 8, 1),
	('Nien', 'Nunb', 10, 3, 10, 13, 3),
	('Emperor', 'Palpatine', 10, 1, 11, 12, 1),
	('Ben', 'Kenobi', 10, 5, 5, 10, 3);
		
CREATE TABLE player_info(
	player_id INT UNIQUE NOT NULL,
	position VARCHAR(1) NOT NULL CHECK (position = 'F' OR position = 'D'),
	date_of_birth DATE NOT NULL CHECK (date_of_birth > '1900-01-01'),
	birth_city VARCHAR(100) NOT NULL,
	birth_country VARCHAR(100) NOT NULL,
	CONSTRAINT player_info_player_id_fkey FOREIGN KEY (player_id)
        REFERENCES player_stats(player_id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION);

INSERT INTO player_info (player_id, position, date_of_birth, birth_city, birth_country)
VALUES 
	(1, 'F', '1975-12-25', 'Mos Eisley', 'Tatooine'),
	(2, 'F', '1995-05-03', 'Mos Eisley', 'Tatooine'),
	(3, 'D', '1962-07-21', 'Cloud City', 'Bespin'),
	(4, 'D', '1989-11-18', 'Corellia', 'Corellia'),
	(5, 'F', '1981-01-15', 'Dune Sea', 'Tatooine'),
	(6, 'F', '1995-05-03', 'Alderaan', 'Alderaan'),
	(7, 'D', '1979-06-30', 'Endor', 'Endor'),
	(8, 'F', '1989-06-01', 'Forest Moon', 'Endor'),
	(9, 'F', '1951-02-18', 'Unknown', 'Unknown'),
	(10, 'D', '1964-09-14', 'Mos Eisley', 'Tatooine');


-- Top Scorers with Teams
CREATE VIEW top_scorers AS
SELECT player_stats.first_name, player_stats.last_name, player_stats.points, teams.team_name
FROM player_stats LEFT OUTER JOIN teams ON teams.team_id = player_stats.team_id 
ORDER BY points DESC;

-- Points Per Game
CREATE VIEW points_per_game AS
SELECT first_name, last_name, ROUND((points * 1.00 / games_played), 2) AS points_per_game 
FROM player_stats
ORDER BY points_per_game DESC;

-- Player Points by Planet
CREATE VIEW points_per_planet AS
SELECT SUM(player_stats.points) AS total_points, player_info.birth_country
FROM player_stats
INNER JOIN player_info ON player_info.player_id = player_stats.player_id
GROUP BY birth_country
ORDER BY total_points DESC;







