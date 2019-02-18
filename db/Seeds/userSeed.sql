create table users (
    user_id serial primary key,
    username varchar(40) not null unique, 
    password varchar(40) not null,
    garage_id serial,
    cart_id serial,
    foreign key (garage_id) references garage (garage_id),
    foreign key (cart_id) references carts(cart_id)
);