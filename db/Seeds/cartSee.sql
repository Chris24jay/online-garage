create table if not exists cart (
    cart_id integer primary key,
    parts_id integer,
    foreign key (parts_id) references parts(id),
)