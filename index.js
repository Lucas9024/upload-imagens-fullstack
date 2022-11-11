const express = require("express");
const app = express();
const uploadUser = require("./middlewares/uploadImage")

app.post("/upload", uploadUser.single('image'), async (req, res) => {
    
    if(req.file){
        return res.json({
            erro: false, 
            mensage: "Upload realizado com sucesso!"
        })
    }

    //quando ocorrer erros

    return res.status(400).json({
        erro: false, 
        mensage: "Upload não pode ser realizado! As imagens devem ser no formato png, jpg, jpeg"
    })

  
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
});