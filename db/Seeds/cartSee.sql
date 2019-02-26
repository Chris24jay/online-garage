create table if not exists cart (
    cart_id serial primary key,
    parts_id integer,
    user_id integer,
    foreign key (parts_id) references parts(id),
    foreign key (user_id) references users(user_id)
);