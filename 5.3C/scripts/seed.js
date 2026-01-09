const mongoose = require('mongoose');
const Book = require('../models/book.model');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

const books = [
  {
    id: 'b1',
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    year: 2008,
    genre: 'Science Fiction',
    summary: 'First novel of Remembrance of Earth’s Past.',
    price: '29.99'
  },
  {
    id: 'b2',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Classic',
    summary: 'A story of love and morality.',
    price: '22.00'
  },
  {
    id: 'b3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Classic',
    summary: 'Romantic novel of manners.',
    price: '22.00'
  },
  {
    id: 'b4',
    title: 'The English Patient',
    author: 'Michael Ondaatje',
    year: 1992,
    genre: 'Historical Fiction',
    summary: 'A wartime love story.',
    price: '25.39'
  },
  {
    id: 'b5',
    title: 'Small Gods',
    author: 'Terry Pratchett',
    year: 1992,
    genre: 'Fantasy',
    summary: 'A Discworld novel.',
    price: '31.99'
  }
];

(async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('✅ Database seeded');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
})();