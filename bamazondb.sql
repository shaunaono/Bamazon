DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id int(10) auto_increment not null PRIMARY KEY,
product_name varchar(150) null,
department_name varchar (50) null,
price decimal(5,2) null,
stock_quantity numeric(6)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Kinders BBQ Sauce", "Food", 10.75, 3);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Nuts N More Peanut Butter", "Food", 6.25, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Evogen IR", "Supplements", 29.95, 8);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Better Oats Oatmeal", "Food", 12.35, 12);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Wahl Pet Shampoo", "Pets", 8.25, 4);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Hammermill Paper", "Household", 10.35, 12);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Optimum Nutrition Whey Protein", "Supplements", 30.87, 9);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Febreze Plugins", "Household", 8.15, 3);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Xtend BCAA", "Supplements", 15.80, 3);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Cottonelle Toilet Paper", "Household", 11.55, 5);
    
