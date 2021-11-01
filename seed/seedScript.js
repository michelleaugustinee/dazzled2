//mengupload produk" yang kita jual kedalam database kita
const Product = require("../models/product");
const mongoose = require("mongoose");
const product = require("../models/product");

mongoose.connect(
  "mongodb+srv://michelleaugustinee:Vr9v8tWsOTIq8nz9@cluster0.n4cu2.mongodb.net/dazzled?retryWrites=true&w=majority",
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database terhubung untuk seeding!");
    }
  }
);

const products = [
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Top",
    price: 199000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Bottom",
    price: 399000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Hat",
    price: 99000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Inner",
    price: 499000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Outer",
    price: 699000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Socks",
    price: 49000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Shoes",
    price: 1999000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Test",
    price: 109000,
  }),
  new Product({
    imagePath:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    name: "Coba",
    price: 000,
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save((err, res) => {
    done++;
    if (done == products.length) {
      console.log("Produk berhasil diupload!");
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
