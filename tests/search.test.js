const SweetShop = require("../src/sweetShop");

describe("SweetShop - Search Sweet", () => {
  //test to search by name
  it("should search sweets by name", () => {
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

    //searchByName method is case insensitive
    const result = shop.searchByName("Gajar Halwa");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Gajar Halwa");
  });

  //test to search by category
  it("should search sweets by category", () => {
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

    const result = shop.searchByCategory("Nut-Based");
    expect(result.length).toBe(1);
    expect(result[0].category).toBe("Nut-Based");
  });

  //test to search by price range
  it("should search sweets by price range", () => {
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

    const result = shop.searchByPriceRange(20, 40);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Gajar Halwa");
  });
});
