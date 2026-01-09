const express = require("express");
const router = express.Router();

const Controllers = require("../controller");

router.get("/", Controllers.booksController.getAllBooks);
router.get("/:id", Controllers.booksController.getBookById);

module.exports = router;
