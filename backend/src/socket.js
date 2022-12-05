module.exports = serverSocket = (io) =>{
    io.on("connection", async (socket) =>{
        // console.log("nuevo user conectado", socket.id)
        // socket.on("test", () =>{
        //     console.log("evento test")
        // })
        socket.emit('client-getInfo', "Conectado con el server")
        socket.on("server-newMessage", (data) =>{//recive desde el mismo server
            io.emit("client-newMessage", data)//y luego envia a traves del evento especificado 
        })
    })
}