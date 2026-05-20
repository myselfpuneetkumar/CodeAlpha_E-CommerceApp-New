const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("🌱 Seeding sample products...");

  const products = [
    {
      name: "Apple iPhone 15",
      description: "Latest iPhone with A17 Pro chip, 128GB storage.",
      price: 79999,
      image: "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg"
    },
    {
      name: "Samsung Galaxy Watch 6",
      description: "Smartwatch with AMOLED display and fitness tracking.",
      price: 29999,
      image: "https://m.media-amazon.com/images/I/61t9eXB9IQL._SX679_.jpg"
    },
    {
      name: "HP Pavilion Laptop",
      description: "Intel i5, 16GB RAM, 512GB SSD, 15.6-inch display.",
      price: 65999,
      image: "https://m.media-amazon.com/images/I/71bJVxq-+JL._SX679_.jpg"
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      description: "Industry-leading noise cancellation with premium sound.",
      price: 24999,
      image: "https://m.media-amazon.com/images/I/61ONqK7Aq6L._SX679_.jpg"
    },
    {
      name: "Apple iPad 10th Gen",
      description: "A14 Bionic chip, 10.9-inch Liquid Retina display.",
      price: 43999,
      image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg"
    }
  ];

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Sample products added successfully!");
  mongoose.connection.close();
});
