drop database bamazondb;
create database bamazondb;
use bamazondb;

create table products (
id int auto_increment not null,
item_id integer (100) not null,
product_name varchar(100) not null,
department_name varchar (100) not null,
price integer (100) not null,
stock_quantitiy int,
primary key (id)
)

insert into products ("item_id", "product_name", "department_name", "price", "stock_quantity")
values("1", "Disco Ball", "Party Supplies", "500", "100");


insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("2", "Bonsai Pot", "Home and Garden", "500", "35");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("3", "Lawn Mower", "Home and Garden", "200", "1000");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("4", "Dog Collar", "Pet Supplies", "200", "10");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("5" "Sandal", "Shoes and Clothing", "450", "29.99");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("6", "Basketball", "Sports and Recreation", "320", "40");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("7", "Vodka", "Food and Beverage", "90", "10");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("8", "Vintage Vase", "Home and Garden", "10", "2000");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("9", "Camping tent", "Sports and Recreation", "20", "90");

insert into products("item_id", "product_name", "department_name", "price", "stock_quantity")
values("10", "Socks", "Shoes and Clothing", "400", "7");