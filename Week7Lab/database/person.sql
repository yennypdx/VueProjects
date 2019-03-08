CREATE TABLE Person
(
    personTabId SERIAL PRIMARY KEY,
    firstName VARCHAR(64) NOT NULL,
    midInitial VARCHAR(10) NULL,
    lastName VARCHAR(64) NOT NULL
);