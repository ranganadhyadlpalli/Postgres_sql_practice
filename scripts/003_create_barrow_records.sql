create table borrow_records(
    id serial primary key,
    user_id int references users(id),
    book_id int references books(id),
    borrowed_at timestamp default now(),
    due_date date not null,
    returned_at timestamp
)