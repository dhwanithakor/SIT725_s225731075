const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task42DB');

// Schema
const ItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
});

const Item = mongoose.model('Item', ItemSchema);


const items = [
  {
    name: "Laptop Stand",
    category: "Accessories",
    price: 40,
    description: "Adjustable aluminium laptop stand"
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25,
    description: "Ergonomic wireless mouse"
  },
  {
    name: "Keyboard",
    category: "Electronics",
    price: 60,
    description: "Mechanical gaming keyboard"
  },
  {
    name: "USB Hub",
    category: "Accessories",
    price: 20,
    description: "4-port USB 3.0 hub"
  }
];

Item.insertMany(items).then(() => {
  console.log("Multiple items saved!");
  process.exit();
});