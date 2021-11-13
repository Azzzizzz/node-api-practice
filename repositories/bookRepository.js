const Book = require("../models/bookModel");

function getAll() {
  return Book
  .find({}, { __v: 0 })
  // .limit(5)
  .sort({ createdAt: -1 });
}

function add(data) {
  const book = new Book(data);
  return book.save();
}

function getById(id) {
  return Book.findOne({ _id: id }, { __v: 0 });
}

module.exports = {
  getAll,
  add,
  getById,
};
