-- vehicles table
create table if not exists vehicles(
    vehicle_id serial primary key, 
    year int,
    make varchar(20),
    model varchar(20)
);

insert into vehicles ( year, make, model)
values
(2019,'Chevy','Cruze'),
(2018,'Chevy','Cruze'), 
(2017,'Chevy','Cruze');
(2019, 'Chevy', 'Colorado'),
(2018, 'Chevy', 'Colorado'),
(2017, 'Chevy', 'Colorado'),
(2019, 'Chevy', 'Silverado'),
(2018, 'Chevy', 'Silverado'),
(2017, 'Chevy', 'Silverado'),
(2019,'Toyota','Tacoma'),
(2018,'Toyota','Tacoma'),
(2017,'Toyota','Tacoma'), 
(2019,'Toyota','Rav4'),
(2018,'Toyota','Rav4'),
(2017,'Toyota','Rav4'),
(2019,'Toyota', 'Tundra'),
(2018, 'Toyota', 'Tundra'),
(2017, 'Toyota', 'Tundra'),
(2019, 'GMC', 'Canyon'),
(2018, 'GMC', 'Canyon'), 
(2017, 'GMC', 'Canyon'),
(2019, 'GMC', 'Terrain'),
(2018, 'GMC', 'Terrain'),
(2017, 'GMC', 'Terrain'),
(2019, 'GMC', 'Sierra'),
(2018, 'GMC', 'Sierra'),
(2017, 'GMC', 'Sierra'),
(2019, 'Tesla', 'Roadster'),
(2019, 'Tesla', 'Model S'),
(2019, 'Tesla', 'Model X');