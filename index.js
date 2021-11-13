// create a new express server
const express = require("express");
const app = express();
const defaultRouter = require("./routes/defaultRouter");
const bookRouter = require("./routes/bookRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongoose.connect("mongodb://localhost:27017/fsa", () => {
//   console.log("db connected");
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/fsa")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("could not connect to db", err));
// mongoose
//   .connect('mongodb://localhost:27017/fsa')
//   .then(() => console.log("db connected"))
//   .catch((err) => console.error("could not connect to db", err));

app.use(bodyParser.json());

// route or endpoint
app.use(defaultRouter);
app.use(bookRouter);

app.get("/authors", (req, res) => {
  res.status(200).send("Authors");
});
