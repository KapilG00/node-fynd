// STEPS WHEN YOU GO TO PIZZA SHOP....

// 1. Pizza shop i want to order large pizza with 10 toppings.
// 2. Customer receives a order number.

/*
{
    orderNumber:
    pizzaType:
    ETA: 10;
}
*/

const PizzaShop = require("./pizzaShop");

const shop = new PizzaShop();

shop.on("order", (data) => {
  const { orderNumber, pizzaType, toppings } = data;

  console.log(
    `Hey customer order number ${orderNumber} with ${pizzaType} and ${toppings} topping(s), your pizza is ready!!`
  );
});

shop.order("Large", 20);
shop.order("Medium", 2);
shop.order("Small", 1);
