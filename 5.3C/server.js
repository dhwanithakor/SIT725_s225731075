const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/booksDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const bookRoutes = require('./routes/books.routes');
app.use('/api/books', bookRoutes);

// Integrity check route
app.get('/api/integrity-check42', (req, res) => {
  res.sendStatus(204);
});



app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});