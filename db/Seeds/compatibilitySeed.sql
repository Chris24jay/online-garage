create table if not exists compatibility (
    id serial primary key,
    parts_id int, 
    vehicle_id int,
    foreign key (vehicle_id) references vehicles (vehicle_id),
    foreign key (parts_id) references parts (id)
);

insert into compatibility (parts_id, vehicle_id)
values 
(1,2),(1,3),(1,4),(1,5,),(1,6),(2,1,),(2,2),(2,3),(2,4),(2,5),(2,6),(3,7),(3,8),(3,9),(4,7),(4,8),(4,9),(5,10),(5,11),
(5,12),(6,10),(6,11),(6,12),(7,13),(7,14),(7,15),(8,13),(8,14),(8,15),(9,16),(9,17),(9,18),(10,16),(10,17),(10,18),(1,19),(1,20),(1,21),
(2,19),(2,20),(2,21),(2,22),(2,23),(2,24),(1,22),(1,23),(1,24),(3,25),(3,26),(3,27),(4,25),(4,26),(4,27);