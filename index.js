// create a new express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// route or endpoint
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/books", (req, res) => {
  const books = [
    { id: 1, name: "Clean Code", price: 100 },
    { id: 2, name: "DS & Alg", price: 200 },
    { id: 3, name: "Eloquent JavaScript", price: 120 },
  ];
  res.status(200);
  res.json(books);
});

app.get("/authors", (req, res) => {
  res.status(200).send("Authors");
});
