create database miapi;

create table users (
    id serial primary key,
    name varchar(50),
    email text,
    edad integer
);

create table links (
    id serial primary key,
    link varchar(150),
    detalle text,
    userid integer references users(id)
);

insert into users (name , email, edad) values
('Figo', 'Figo@gmail.com', 28),
('Juan', 'Juan@gmail.com', 30),
('Rolando', 'Rolando@gmail.com', 18),
('Andres', 'Andres@gmail.com', 40);