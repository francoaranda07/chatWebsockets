const Message = require("../models/message.model")
const { sendDataSocket } = require("../libs/actionSocket")

const getAll = async (req, res) => {
    
    try {
        let messages = await Message.find()
        if(messages == '' || messages == 0 || messages == null){
            return res.status(404).json({msg: "No se encontraron mensajes"})
        }else{
            return res.status(200).send(messages)
        }
    } catch (error) {
        res.status(500).json({ msg: "El servidor no puede devolver una respuesta" })
        console.error(`Tipo: ${error.name}, Error: ${error.message}`);
    }
};

const getById = async (req, res) =>{    
    // const { id } = req.params
    // try {
    //     let foundPila = await Pila.findById(id)
    //     if(foundPila == null){
    //         return res.status(404).json({
    //             msg: "No se encontró esa pila"
    //         })
    //     }else{
    //         Pila.find({_id: id}, function (err, pilas) {
    //             File.populate(pilas, { path: "files" }, function (err, pilas) {
    //                 res.status(200).send(pilas);
    //             });
    //         });
    //     }
    // } catch (error) {
    //     res.status(500).json({ msg: "El servidor no puede devolver una respuesta" })
    //     console.error(`Tipo: ${error.name}, Error: ${error.message}`);
    // }
}

const newMessage = async (req, res, next) => {
    const message = new Message(req.body)
    
    try {
        const result = await message.save()
        if(result){
            res.status(201).json({msg: "Mensaje enviado"})
            sendDataSocket(req.body.message)
        }else{
            res.status(400).json({msg: "Ocurrió un error al enviar"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "El servidor no puede devolver una respuesta"})
        console.error(`Tipo: ${error.name}, Error: ${error.message}`);
    }
}

 
const deleteMessage = async(req, res) =>{
    // const {id} = req.params
    // try {
    //     var foundPila = await Pila.findById(id)
    //     if(foundPila == null || foundPila == ""){
    //         return res.status(203).json({msg: "No se encontró la pila"})
    //     }
    // } catch (error) {
    //     res.status(500).json({ msg: "El servidor no puede devolver una respuesta" })
    //     console.error(`Tipo: ${error.name}, Error: ${error.message}`);
    // }

    // try {
    //     for(var i = 0; i < foundPila.files.length; i++){// que busque las relaciones con las pilas y las elimine de la bd y del server
    //         const resultFile = await File.findByIdAndDelete(foundPila.files[i]["_id"])
    //         // console.log(resultFile);
    //         await unlink(path.resolve('./src/public'+ resultFile.path))//elimina del server
    //     }
    //     const resultPila = await Pila.findByIdAndDelete(id)//elimina de la db
    //     if(resultPila){
    //         res.status(201).json({msg: "Pila eliminada correctamente con sus respectivas relaciones"})
    //     }
    // } catch (error) {
    //     res.status(500).json({ msg: "El servidor no puede devolver una respuesta" })
    //     console.error(`Tipo: ${error.name}, Error: ${error.message}`);
    // }
}
module.exports= {
    getAll,
    getById,
    newMessage,
    deleteMessage
}