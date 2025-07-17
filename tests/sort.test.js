const SweetShop = require("../src/sweetShop");

//test to sort the sweets by name in ascending order
describe("SweetShop - Sort by Name Ascending", () => {
  it("should sort sweets by name in ascending order", () => {
    const shop = new SweetShop();

    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    });
    shop.addSweet({
      id: "1003",
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    });

    const sortedByName = shop.sortSweets("name", "asc");

    expect(sortedByName[0].name).toBe("Gajar Halwa");
    expect(sortedByName[1].name).toBe("Gulab Jamun");
    expect(sortedByName[2].name).toBe("Kaju Katli");
  });

  //test to sort by name in descending order
  it("should sort sweets by name in descending order", () => {
    const shop = new SweetShop();
    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    });
    shop.addSweet({
      id: "1003",
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    });

    const sorted = shop.sortSweets("name", "desc");
    expect(sorted[0].name).toBe("Kaju Katli");
    expect(sorted[1].name).toBe("Gulab Jamun");
    expect(sorted[2].name).toBe("Gajar Halwa");
  });

  //test to sort the sweets by price in descending order
  it("should sort sweets by price in descending order", () => {
    const shop = new SweetShop();

    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    });
    shop.addSweet({
      id: "1003",
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    });

    const sortedByPriceDesc = shop.sortSweets("price", "desc");

    expect(sortedByPriceDesc[0].price).toBe(50);
    expect(sortedByPriceDesc[1].price).toBe(30);
    expect(sortedByPriceDesc[2].price).toBe(10);
  });

  //test to sort by price in ascending order
  it("should sort sweets by price in ascending order", () => {
    const shop = new SweetShop();

    shop.addSweet({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: "1002",
      name: "Gajar Halwa",
      category: "Vegetable-Based",
      price: 30,
      quantity: 15,
    });
    shop.addSweet({
      id: "1003",
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    });

    const sortedByPriceAsc = shop.sortSweets("price", "asc");

    expect(sortedByPriceAsc[0].price).toBe(10);
    expect(sortedByPriceAsc[1].price).toBe(30);
    expect(sortedByPriceAsc[2].price).toBe(50);
  });
});
