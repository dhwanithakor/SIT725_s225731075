const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    author: String,
    year: Number,
    genre: String,
    summary: String,
    price: {
      type: mongoose.Decimal128,
      required: true,
      get: v => v.toString()
    },
    currency: {
      type: String,
      default: 'AUD'
    }
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true }
  }
);

module.exports = mongoose.model('Book', BookSchema);