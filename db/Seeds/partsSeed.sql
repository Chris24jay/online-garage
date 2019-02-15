-- table creation
-- example items for parts table: oil filter, oil, brakes, windshield wipers
--2 per item for every vehicle


create table parts (
    id serial primary key
    parts_id  varchar(20),
    part_name varchar(40),
    price decimal,
    image varchar(200)
);

insert into parts (parts_id, part_name, price, image)
values
('MGL10290', 'MicroGard Oil Filter', 4.99, 'https://images.oreillyauto.com/parts/img/large/mgd/mgl10290.jpg'),
('M1-113A', 'Mobile 1 Oil Filter', 14.99, 'https://images.oreillyauto.com/parts/img/large/mob/m1-113a_p04_fro.jpg'),
('MGL10255', 'MicroGard Oil Filter', 4.99, 'https://images.oreillyauto.com/parts/img/large/mgd/mgl10255.jpg'),
('M1-212A', 'Mobil 1 Oil Filter', 14.99, 'https://images.oreillyauto.com/parts/img/large/mob/m1-212a_p04_fro.jpg'),
('MGL51348', 'MicroGard Oil Filter', 4.99, 'https://images.oreillyauto.com/parts/img/large/mgd/mgl51348.jpg'), 
('M1-102A', 'Mobil 1 Oil Filter', 14.99, 'https://images.oreillyauto.com/parts/img/large/mob/m1-102a_p04_fro.jpg'),
('MGL57047', 'MicroGard Oil Filter', 6.99, 'https://images.oreillyauto.com/parts/img/large/mgd/mgl57047.jpg'),
('M1C251A', 'Mobil 1 Oil Filter', 18.99, 'https://images.oreillyauto.com/parts/img/large/mob/m1c-251a_p04_fro.jpg'),
('MGL57041', 'MicroGard Oil Filter', 6.99, 'https://images.oreillyauto.com/parts/img/large/mgd/mgl57041.jpg'),
('M1C453A', 'Mobil 1 Oil Filter', 19.99, 'https://images.oreillyauto.com/parts/img/large/mob/m1c-453a_p04_fro.jpg'),


