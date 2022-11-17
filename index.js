const express = require("express");
const app = express();
const upload = require('./middleware/upload')

app.post("/upload", upload.single('image'), async(req, res) =>{

    if(req.file) {

        return res.json({
            erro: false, 
            message: "Upload feito com exito!"
        })
    
    }

    return res.status(400).json({
        erro: true, 
        message: "Upload não concluido! As imagens devem ser no formato png, jpg ou jpeg"
        })
});

app.listen(8080, ()=> {
    console.log("Servidor rodando na porta 8080")
})