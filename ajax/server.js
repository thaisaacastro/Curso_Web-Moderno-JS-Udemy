const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(".")); // dentro da pasta atual sirva os arq atuais/prove
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // se vier um json vai ser transformado em object

app.get("/teste", (req, res) => res.send("OK"));
app.listen(8080, () => console.log("Executando..."));
