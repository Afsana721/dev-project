
--make query to get data from teams and hr.players tables
--select require columns from t for teams and p for players table as Alias
-- use case expression: evalutes the weight of players and assigns the 'Weight Category' & codition
-- use where clause to  make codition and FILTER date from both table based on the condition
--ORDER BY clause orders teh results first by team_id in ascending order and then show weight. 
SELECT
    t.id AS team_id,
    t.name AS name,
    t.city,
    t.state,
    p.fname || ' ' || p.lname AS fullname,
    p.weight,
    CASE
        WHEN p.weight > 200 THEN 'Heavy'
        ELSE 'Medium'
    END AS "Weight Category"
FROM
    teams t
LEFT JOIN
    players p ON t.id = p.team_id
ORDER BY
    t.id ASC,
    p.weight ASC;
    

    