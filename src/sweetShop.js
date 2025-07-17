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
}

module.exports = SweetShop;
