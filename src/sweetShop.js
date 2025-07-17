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
}

module.exports = SweetShop;
