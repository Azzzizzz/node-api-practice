const Book = require("../models/bookModel");
const bookRepository = require("../repositories/bookRepository");

const books = [
  { id: 1, name: "Clean Code", price: 100 },
  { id: 2, name: "DS & Alg", price: 200 },
  { id: 3, name: "Eloquent JavaScript", price: 120 },
];

const get = async (req, res) => {
  try {
    const books = await bookRepository.getAll();
    res.status(200);
    res.json(books);
  } catch (e) {
    // TODO: Logging
    res.status(500);
    res.send("Internal server error");
  }
};

const post = (req, res) => {
  const book = req.body;
  console.log(req.body);
  books.push(book);
  console.log(books);
  res.status(201).send();
};

const getById = (req, res) => {
  const id = +req.params.id;

  let book;
  for (let i = 0; i < books.length; i++) {
    if (id === books[i].id) book = books[i];
  }

  if (book) res.status(200).send(book);
  else res.status(404).send("not found");
};

const remove = (req, res) => {
  const id = +req.params.id;
  for (i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
    }
  }
  res.status(204).send();
};

const update = (req, res) => {
  const id = +req.params.id;
  const book = req.body;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books[i].name = book.name;
      books[i].price = book.price;
    }
  }

  res.status(204).send();
};

module.exports = {
  get,
  post,
  getById,
  remove,
  update,
};
