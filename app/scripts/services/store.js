'use strict';

function store() {
  this.products = [
    new product("p1", "Shirt", "shirt description", 12),
    new product("p2", "Pants", "pants description", 16),
    new product("p3", "Sweatshirt", "sweatshirt description", 4),
    new product("p4", "Cantaloupe", "Delicious and refreshing.", 3)
  ];
}

store.prototype.getProduct = function (sku) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].sku === sku)
      return this.products[i];
  }
  return null;
}
