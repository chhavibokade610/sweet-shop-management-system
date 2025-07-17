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

});
