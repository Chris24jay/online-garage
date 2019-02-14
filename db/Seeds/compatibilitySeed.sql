create table if not exists compatibility (
    id serial primary key,
    parts_id int, 
    vehicle_id int,
    foreign key (vehicle_id) references vehicles (vehicle_id),
    foreign key (parts_id) references parts (id)
);

insert into parts (parts_id, part_name, price, image)
values 
(1,2),(1,3),(1,4),(1,5,),(1,6),(2,1,),(2,2),(2,3),(2,4),(2,5),(2,6),(3,7),(3,8),(3,9),(4,7),(4,8),(4,9),(5,10),(5,11),
(5,12),(6,10),(6,11),(6,12),(7,13),(7,14),(7,15),(8,13),(8,14),(8,15);