const SweetShop = require("../src/sweetShop");

//test to purchase sweets and reduce quantity
describe("SweetShop - Purchase Sweet", () => {
  it("should allow purchasing sweets and reduce the quantity in stock", () => {
    const shop = new SweetShop();
    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });

    shop.purchaseSweet("1001", 5);

    const sweets = shop.getAllSweets();
    expect(sweets[0].quantity).toBe(15);
  });

  //test to throw error when purchasing more than available stock
  it("should throw error when purchasing more than available quantity", () => {
    const shop = new SweetShop();
    shop.addSweet({
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 10,
    });

    expect(() => {
      shop.purchaseSweet("1002", 15);
    }).toThrow("Insufficient stock");
  });

  //test to throw an error while purchasing non existent sweet
  it("should throw an error when trying to purchase a non-existent sweet", () => {
    const shop = new SweetShop();
    expect(() => {
      shop.purchaseSweet("9999", 5);
    }).toThrow("Sweet Not Found");
  });
});
