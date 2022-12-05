const express = require('express')
const routers = express.Router();
const message = require("./message.router")

routers.use("/", message);

module.exports = routers;