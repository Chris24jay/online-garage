create table if not exists orders (
    order_id serial primary key,
    user_id integer,
    checkout boolean,
    foreign key (user_id) references users(user_id)
);