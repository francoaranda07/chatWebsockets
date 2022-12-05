const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const Message = mongoose.model("Message", new mongoose.Schema({
    message: String,
    })
);

module.exports = Message;