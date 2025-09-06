import CryptoJS from "crypto-js";
import Product from "./product.js";

const produtct = new Product(1, "Product test", 10, 100);

const encryptedProduct = CryptoJS.AES.encrypt(JSON.stringify(produtct), "asdf").toString();
const decryptedProduct = CryptoJS.AES.decrypt(encryptedProduct, "asdf").toString(CryptoJS.enc.Utf8);

console.log("Encrypted: ", encryptedProduct);
console.log("Decrypted: ", decryptedProduct);