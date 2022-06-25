-- List all DB : 
-- \l

-- Create DB:

-- CREATE DATABASE yelp;

-- Connect to db : \c yelp
-- list all tables : \d
-- Create table:
--  view table contents : \d products
-- CREATE TABLE products(
--     Id INT,
--     Name VARCHAR(65),
--     Price INT,
--     on_purchase boolean
-- );

CREATE TABLE resturants(
    Id BIGSERIAL NOT NULL PRIMARY KEY,
    Name VARCHAR(65) NOT NULL,
    location VARCHAR(65) NOT NULL,
    Price_range INT NOT NULL check(Price_range >= 1 and Price_range <=5)
);
