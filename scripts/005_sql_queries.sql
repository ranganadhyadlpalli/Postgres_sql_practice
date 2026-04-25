SELECT * FROM books WHERE available_copies > 5;

SELECT * FROM users WHERE email LIKE '%gmail%';

SELECT * FROM books ORDER BY available_copies ASC LIMIT 3;

SELECT * FROM borrow_records WHERE returned_at IS NULL;