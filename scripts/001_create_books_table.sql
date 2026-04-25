create table books(
    id serial primary key, 
    title text not null,
    author text not null,
    genre text null,
    total_copies int not null,
    available_copies int not null,
    created_at timestamp default now()
)

