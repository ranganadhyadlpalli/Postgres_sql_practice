insert into books(
        title,
        author,
        genre,
        total_copies,
        available_copies
    )
values ('The Alchemist', 'Paulo Coelho', 'Fiction', 5, 5),
    ('The Rich Guy', 'Sean Coelho', 'Money', 10, 10),
    ('Mental Guy', 'Paul hen', 'Science', 15, 15),
    ('Family Man', 'henry Dyk', 'Drama', 25, 25);



INSERT into users(name, email)
values ('Arjun', 'arjun@gmail.com'),
    ('Mahesh', 'mahesh123@gmail.com'),
    ('Venky', 'venky90@gmail.com');


SELECT *
FROM books;

SELECT * FROM users;

INSERT into borrow_records(
    user_id,
    book_id,
    due_date
) values (1,1,'2026-05-07 19:15:15.430314'),
(2,2,'2026-05-07 19:15:15.430314');

SELECT * from borrow_records;

INSERT INTO borrow_records(
    user_id,
    book_id,
    due_date
) values (999,1,'2026-05-07 19:15:15.430314');