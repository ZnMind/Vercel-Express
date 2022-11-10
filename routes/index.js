const express = require("express");
const messageRouter = require("./message.js");
const router = express.Router();

// localhost:5000/api/message/
router.use("/message", messageRouter);

module.exports = router;