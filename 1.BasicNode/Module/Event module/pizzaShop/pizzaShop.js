const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  #orderNumber = 0;

  order(size, toppings) {
    this.#orderNumber++;

    // Process that order...
    // 1. Take the money.

    // --- We can message here but the message should be decoupled. ---

    // console.log(
    //   `hey customer oder number ${
    //     this.#orderNumber
    //   } with ${size} and topping ${toppings}`
    // );

    // message user
    // message supervisor
    // message to regional head

    // ------- SOLUTION FOR ABOVE problem ---------

    // EVENT DRIVEN.
    this.emit("order", {
      orderNumber: this.#orderNumber,
      pizzaType: size,
      toppings,
    });
  }

  displayOrderNumber() {
    console.log("Pizza order Number ", this.#orderNumber);
  }
}

// export default PizzaShop; // do not do this.

module.exports = PizzaShop;
