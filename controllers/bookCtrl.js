const books = [
  { id: 1, name: "Clean Code", price: 100 },
  { id: 2, name: "DS & Alg", price: 200 },
  { id: 3, name: "Eloquent JavaScript", price: 120 },
];
const get = (req, res) => {
  res.status(200);
  res.json(books);
};

const post = (req, res) => {
  const book = req.body;
  console.log(req.body);
  books.push(book);
  console.log(books);
  res.status(201).send();
};

const getById = (req, res) => {
  let id = +req.params.id;

  let book;
  for (let i = 0; i < books.length; i++) {
    if (id === books[i].id) book = books[i];
  }

  if (book) res.status(200).send(book);
  else res.status(404).send("not found");
};

module.exports = {
  get,
  post,
  getById,
};
