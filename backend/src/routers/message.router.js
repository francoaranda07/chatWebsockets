const express = require('express')
const router = express.Router();
const { getAll, getById, newMessage, deleteMessage} = require("../controllers/message.controllers")

router.get("/message", getAll)

router.get("/message/:id", getById)

router.post("/message", newMessage)

router.delete("/message/:id", deleteMessage)

module.exports = router;
