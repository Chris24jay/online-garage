create table if not exists garage (
    garage_id integer primary key,
    vehicle_id integer, 
    foreign key (vehicle_id) referneces vehicles(vehicle_id)
)