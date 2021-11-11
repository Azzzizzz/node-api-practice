// create a new express server
const express = require("express");
const app = express();
const defaultRouter = require("./routes/defaultRouter");
const bookRouter = require("./routes/bookRouter");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(bodyParser.json());

// route or endpoint
app.use(defaultRouter);
app.use(bookRouter);

app.get("/authors", (req, res) => {
  res.status(200).send("Authors");
});
