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

module.exports = {
  get,
  post,
};
