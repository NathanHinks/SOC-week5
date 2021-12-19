-- command run to set up database:
CREATE TABLE bootcamper_scores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  score SMALLINT NOT NULL
);

-- command run to add some initial data:
INSERT INTO bootcamper_scores (name, score)
VALUES  
    ('Nathan', '0'),
    ('Godwin', '5'),
    ('Colin', '3'),
    ('Brian', '1');