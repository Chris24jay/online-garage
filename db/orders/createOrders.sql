insert into orders (user_id, checkout)
values (
    ${user_id},
    ${checkout}
)
returning *;



