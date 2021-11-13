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

const post = async (req, res) => {
  const book = req.body;
  await bookRepository.add(book);
  res.status(201);
  res.send("created");
};

const getById = async (req, res) => {
  const id = req.params.id;
  const book = await bookRepository.getById(id);
  res.status(200);
  res.json(book);
  // const id = +req.params.id;
  // let book;
  // for (let i = 0; i < books.length; i++) {
  //   if (id === books[i].id) book = books[i];
  // }
  // if (book) res.status(200).send(book);
  // else res.status(404).send("not found");
};

const remove = async (req, res) => {
  const id = req.params.id;
  // TODO: try catch
  await bookRepository.remove(id);
  // for (i = 0; i < books.length; i++) {
  //   if (books[i].id === id) {
  //     books.splice(i, 1);
  //   }
  // }
  res.status(204).send();
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    await bookRepository.update(id, req.body);
    res.status(204).send();
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
  // const book = req.body;
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].id === id) {
  //     books[i].name = book.name;
  //     books[i].price = book.price;
  //   }
  // }
};

const patch = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await bookRepository.patch(id, body);
  res.status(204).send();
}
module.exports = {
  get,
  post,
  getById,
  remove,
  update,
  patch,
};
