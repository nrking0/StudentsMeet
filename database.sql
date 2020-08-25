CREATE DATABASE pernmentors;

CREATE TABLE mentors(
    mentor_id SERIAL PRIMARY KEY,
    fname VARCHAR(100),
    lname VARCHAR(100),
    email VARCHAR(100),
    number VARCHAR(20),
    grade VARCHAR(10),
    bio VARCHAR(500),
    years VARCHAR(10),
    interestedSubjects VARCHAR(1000)
);