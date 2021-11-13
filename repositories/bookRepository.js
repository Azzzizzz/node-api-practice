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

function remove(id) {
  return Book.remove({_id:id})
  // return Book.deleteOne({_id:id})
}

function update(id, data) {
  return Book.updateOne({ _id: id }, {
    // $set: { name: data.name },
    // $set: { price: data.price }
    $set: {name:data.name, price:data.price}
  })
  
}

module.exports = {
  getAll,
  add,
  getById,
  remove,
  update,
};
