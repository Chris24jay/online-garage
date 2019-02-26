create table if not exists garage (
    garage_id serial primary key,
    vehicle_id integer, 
    user_id integer,
    foreign key (vehicle_id) references vehicles(vehicle_id),
    foreign key (user_id) references users(user_id)
);