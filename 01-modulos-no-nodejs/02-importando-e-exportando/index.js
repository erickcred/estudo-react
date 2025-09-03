const { Product, createProduct } = require("./product");
require("./hello");

const product = createProduct(1, "Mouse", 1500.00);
const newProduct = new Product(2, "Teste", 12500.30);

console.log(product.getInfo());
console.log(newProduct.getInfo());