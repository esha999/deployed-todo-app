CREATE DATABASE todoapp;

CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos(id, user_email, title, progress, date)
VALUES('0', 'esha@test.com', 'First TODO', 10, 'Thu Feb 27 2025 22:02:00 GMT+5:30 (Gulf Stnadard Time)');