insert into users (username, password)
values(
    ${username},
    ${password}
);

-- creates a row in orders table when the user registers, where the user 
-- checkout will be false

-- insert into orders (user_id, checkout)
-- values (
--     ${user_id},
--     false
-- );