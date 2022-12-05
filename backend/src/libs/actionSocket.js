const { io } = require("socket.io-client");
// const env = require("dotenv")

const sendDataSocket = (data) =>{//envia nuevo dato al server por medio de socket
    console.log(data)
    var socket = io("http://localhost:3000", {
        withCredentials: true,
        autoConnect: true
    })
    socket.emit("server-newMessage", data)
}

module.exports = {
    sendDataSocket
}