  DROP TABLE IF EXISTS entries;

  CREATE TABLE entries (
    entries_id INT GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP DEFAULT NOW(),
    title VARCHAR(50),
    text TEXT,
    category VARCHAR(50),
    PRIMARY KEY (entries_id)
);

INSERT INTO entries (title, text, category)
VALUES
  ('My first bike', 'Today I bought a bike', 'Actiivities'),
  ('My first meal out', 'Today I ate out', 'Social'),
  ('I ripped my trousers', 'It was embarassing', 'Personal');
 

