CREATE TABLE Student
(
    studentTabId SERIAL PRIMARY KEY,
    studentIDNum INTEGER NOT NULL,
    email VARCHAR(64) NOT NULL,
    personTabId INTEGER NOT NULL,
    FOREIGN KEY (personTabId) REFERENCES Person (personTabId) ON DELETE CASCADE
);