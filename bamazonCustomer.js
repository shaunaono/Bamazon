var mysql = require("mysql");
var inquirer = require("inquirer");
var cliTable = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazonDB",
});

connection.connect(function(err) {
  if (err) throw err;

  order();
});

function order() {
  var queryProducts =
    "select item_id, product_name, department_name, price from products";

  connection.query(queryProducts, function(err, products) {
    console.log(
      "product id" +
        "\t" +
        "department" +
        "\t" +
        "price" +
        "\t" +
        "product name"
    );
    for (var i = 0; i < products.length; i++) {
      var currentProduct = products[i];
      console.log(
        currentProduct.item_id +
          "\t \t" +
          currentProduct.department_name +
          "\t \t" +
          currentProduct.price +
          "\t \t" +
          currentProduct.product_name
      );
    }
    inquirer
      .prompt([
        {
          name: "userInput_itemID",
          message: "What item ID would you like to purchase?",
          type: "input",
        },

        {
          name: "userInput_quantity",
          message: "How many would you like to purchase",
          type: "input",
        },
      ])
      .then(function(userChoices) {
        var queryAvailable =
          "select stock_quantity from products where item_id = " +
          userChoices.userInput_itemID;
        connection.query(queryAvailable, function(err, products) {
          if (
            Number(userChoices.userInput_quantity) <= products[0].stock_quantity
          ) {
            console.log("We have " + products[0].stock_quantity + " in stock.");
            console.log("You're order is complete!");
          } else if (
            Number(userChoices.userInput_quantity) > products[0].stock_quantity
          ) {
            console.log(products[0].stock_quantity);
            console.log("Sorry, we are out of stock! Keep shopping.");
          }
          var queryTotalPrice =
            "select price from products where ? " + products.price;
          connection.query(queryTotalPrice, function(err, products) {
            var customerTotal = products[0].price;
            queryTotalPrice = userInput_quantity * customerTotal.toFixed(2);
            console.log("Your total price is $" + customerTotal + ".");

            var queryUpdateItems =
              "update products set stock_quantity where ? " +
              products[0].stock_quantity;
            connection.query(queryUpdateItems, function(err, products) {
              console.log(
                "Updated stock quantity is " + products[0].stock_quantity
              );
            });
          });
        });
      });
  });
}
