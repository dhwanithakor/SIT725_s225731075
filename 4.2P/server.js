var express = require("express");
var app = express();
var port = process.env.port || 3000;

const mongoose = require('mongoose');

// Middleware 
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection 
mongoose.connect('mongodb://localhost:27017/task42DB' );

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


const ItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
});

const Item = mongoose.model('Item', ItemSchema);

// REST API route 
app.get('/api/items', async (req, res) => {
  const items = await Item.find({});
  res.json({ statusCode: 200, data: items, message: "Success" });
});


app.listen(port, () => {
  console.log("App listening to: " + port);
});
