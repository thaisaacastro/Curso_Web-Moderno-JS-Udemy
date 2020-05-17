const express = require("./node_modules/express");
const app = express();
const bodyParser = require("./node_modules/body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("<h1>Parabéns. Usúario Incluído!!!</h1>");
});

app.post("/usuarios/:id", (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send("<h1>Parabéns. Usúario Alterado!!!</h1>");
});

app.listen(3003);
