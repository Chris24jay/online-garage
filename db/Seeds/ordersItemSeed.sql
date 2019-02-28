create table if not exist orderItems (
    id serial primary key,
    order_id 
    total decimal,
    part_id integer,
    quantity integer, 
);