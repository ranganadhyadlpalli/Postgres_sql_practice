create table users(
    id serial primary key,
    name varchar(100) not null, 
    email varchar(225) unique not null, 
    created_at timestamp default now()
)