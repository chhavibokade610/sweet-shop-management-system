class SweetShop {
  constructor() {
    // Initializing an empty array to hold all sweet items
    this.sweets = [];
  }

  //addsweet method will push the sweet object into the array
  addSweet(sweet) {
    this.sweets.push(sweet);
  }

  // this method will return a list of all sweets currently in the shop.
  getAllSweets() {
    return this.sweets;
  }

  //deletes a sweet from the shop based on its unique ID.
  deleteSweet(id) {
    this.sweets = this.sweets.filter((sweet) => sweet.id !== id);
  }

  //searches for sweets by name (case-insensitive).
  searchByName(name) {
    return this.sweets.filter(
      (sweet) => sweet.name.toLowerCase() === name.toLowerCase()
    );
  }

  //search for the sweets by category (case - insensitive)
  searchByCategory(category) {
    return this.sweets.filter(
      (sweet) => sweet.category.toLowerCase() === category.toLowerCase()
    );
  }

  //Search for the sweets by price range
  searchByPriceRange(min, max) {
    return this.sweets.filter(
      (sweet) => sweet.price >= min && sweet.price <= max
    );
  }

  //sort sweets by name and price
  sortSweets(field, order) {
    const sorted = [...this.sweets];

    sorted.sort((a, b) => {
      if (field === "name") {
        const aVal = a.name.toLowerCase();
        const bVal = b.name.toLowerCase();
        return order === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      } else if (field === "price") {
        if (order === "desc") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      }
    });

    return sorted;
  }

  //purchase sweet and validating if the required quantity is available or not
  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);

    if (!sweet) {
      throw new Error("Sweet Not Found");
    }

    if (sweet.quantity < quantity) {
      throw new Error("Insufficient stock");
    }

    sweet.quantity -= quantity;

    return {
      success: true,
      remainingQuantity: sweet.quantity,
    };
  }
}

module.exports = SweetShop;
