create table if not exists orderItems (
    id serial primary key,
    order_id integer,
    part_id integer, 
    quantity integer, 
    total_price decimal, 
    foreign key (order_id) references orders(order_id),
    foreign key (part_id) references parts(id)
);