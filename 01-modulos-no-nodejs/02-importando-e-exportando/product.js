class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.id}: ${this.name} - ${this.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price);
}

module.exports = {
  Product,
  createProduct,
};