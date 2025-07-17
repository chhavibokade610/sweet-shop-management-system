const SweetShop = require("../src/sweetShop");

//test to restock sweets and update the quantiy
describe("SweetShop - Restock Sweet", () => {
  it("should restock a sweet and update its quanity", () => {
    const shop = new SweetShop();

    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });

    shop.restockSweet("1001", 10);
    const sweet = shop.getAllSweets().find((s) => s.id === "1001");

    expect(sweet.quantity).toBe(30);
  });
});
