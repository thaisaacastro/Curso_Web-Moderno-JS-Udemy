const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
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

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 7,

    /* operador spread ...*/
  });
});

app.get("/parOuImpar", (req, res) => {
  //receber dados do FrontEnd req.body
  //req.query -> :numero=123
  //req.params -> :numero
  const par = parseInt(req.query.numero) % 2 === 0; //saber se par ou ímpar
  res.send({
    resultado: par ? "par" : "impar",
  });
});

app.listen(4000, () => console.log("Executando..."));
