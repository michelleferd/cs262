--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Get the number of Game records.
SELECT *
  FROM Game
  ;

-- Get the player records.
SELECT * 
  FROM Player
  ;

-- Get all the users with Calvin email addresses.
SELECT *
  FROM Player
 WHERE emailAddress LIKE '%calvin%'
 ;


  SELECT *
   FROM Game
  ORDER BY time DESC

-- Get the cross-product of all the tables.
SELECT *
  FROM Player, PlayerGame, Game
  ;


SELECT *
  FROM Game
ORDER BY time DESC
;


SELECT *
  FROM Game

  WHERE time > '2020-10-16'
ORDER BY time DESC
;


Select *
  FROM Player
  WHERE name is not NULL
;

Select playerID
  FROM PlayerGame
  WHERE score > 2000
;

 SELECT * FROM Player
   WHERE emailAddress LIKE '%gmail%'
;

SELECT score
  FROM Player, PlayerGame
  WHERE PlayerGame.playerID = Player.ID
  AND Player.name = 'The King'
  ORDER BY score DESC
 ;
 
 SELECT name
   FROM Game, Player, PlayerGame
   WHERE PlayerGame.playerID = Player.ID
   AND PlayerGame.gameID = Game.ID
   AND Game.time = '2006-06-28 13:20:00'
   ORDER BY PlayerGame.score DESC 
   LIMIT 1;
   
 --c. compares when the ids were created sequentially and names the one entered first
--d. it's possible. Some subparts have subparts so merging the tables can be hard.
