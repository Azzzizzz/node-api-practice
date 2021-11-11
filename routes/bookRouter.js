const express = require("express");
const bookCtrl = require("../controllers/bookCtrl");
const router = express.Router();

router.get("/api/books", bookCtrl.get);
router.post("/api/books", bookCtrl.post);
router.get("/api/books/:id", bookCtrl.getById);
router.delete("/api/books/:id", bookCtrl.remove);

module.exports = router;
