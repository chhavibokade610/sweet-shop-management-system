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
}

module.exports = SweetShop;
