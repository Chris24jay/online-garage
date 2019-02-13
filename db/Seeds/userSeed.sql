create table users (
    user_id serial primary key,
    username varchar(40) not null unique, 
    password varchar(40) not null,
    profile_pic varchar(100),
)