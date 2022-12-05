const express = require('express')
const app = express()
const server = require('http').Server(app)
const router = require("./routers/index")
const serverSocket = require("./socket")
const db = require("./models")
const dbConfig = require("./db/db.config");
const path = require("path")

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan('dev'))
// app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect to MongoDB");
}).catch(err => {
    console.error("Connection error", err);
    process.exit();
});

// Iniciamos el servidor en el puerto 8080
server.listen(3000, function () {
    console.log('Servidor iniciado en http://localhost:3000')
})

//settings WebSocket
const io = require("socket.io")(server, {
    cors: {
        origin: ['http://localhost:4200'],
        credentials: true,
        // methods: ["GET", "POST"]
    }
})
serverSocket(io)

//Routes
app.get('/', function (req, res){
    res.status(200).send({msg: 'hola che'});
})

app.use('/api', router)