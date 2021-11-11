const get = (req, res) => {
  const books = [
    { id: 1, name: "Clean Code", price: 100 },
    { id: 2, name: "DS & Alg", price: 200 },
    { id: 3, name: "Eloquent JavaScript", price: 120 },
  ];
  res.status(200);
  res.json(books);
};

module.exports = {
  get,
};
