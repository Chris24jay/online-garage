-- example items for parts table: oil filter, oil, brakes, windshield wipers
-- table creation
create table parts (
    part_id serial primary key,
    vehicle_id int,
    part_name varchar(40),
    description varchar(40),
    price decimal,
    foreign key (vehicle_id) references vehicles (vehicle_id)
);