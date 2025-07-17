const SweetShop = require("../src/sweetShop");

describe("SweetShop - Delete Sweet", () => {
  // test to delete a sweet by id
  it("should delete a sweet by ID", () => {
    const shop = new SweetShop();

    //adding data so that we can delete it
    const sweet1 = {
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };
    const sweet2 = {
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    };

    //pushing on to the array
    shop.addSweet(sweet1);
    shop.addSweet(sweet2);

    //calling deleteSweet method to delete first object
    shop.deleteSweet("1001");

    const sweets = shop.getAllSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0].id).toBe("1002");
  });
});
