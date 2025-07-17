const SweetShop = require("../src/sweetShop");

//inside describe all the test cases are written
describe("SweetShop - Add Sweet", () => {
  //this test case is use to add sweet having id, name, category, price and quantity
  it("should add a new sweet with id, name, category, price, and quantity", () => {
    //creating an array to add the sweets
    const shop = new SweetShop();

    //adding sweet object manually
    const sweet = {
      id: "1001",
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    };

    //pushing sweet object into the shop array
    shop.addSweet(sweet);

    // all the sweets object that are added will be stored in sweets
    const sweets = shop.getAllSweets();

    //we are expecting only one sweet in the sweets array
    expect(sweets.length).toBe(1);

    //checking if sweets[0] is exactly same that the one we added
    expect(sweets[0]).toEqual(sweet);
  });
});
