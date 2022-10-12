const express = require("express");
const app = express();
const routes = require("./src/routes/router");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(routes);
const port = 3000;
app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
