const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(".")); // dentro da pasta atual sirva os arq atuais/prove
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // se vier um json vai ser transformado em object

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  }, // função chamada
}); // fazer upload do arq

const upload = multer({ storage }).single("arquivo");

//rota
app.post("/upload", (req, res) /*função middleware*/ => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }

    res.end("Concluído com sucesso.");
  });
});

app.listen(8080, () => console.log("Executando..."));
