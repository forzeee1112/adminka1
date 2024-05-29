const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const cors = require("./middlewares/cors");
const gamesRouter = require("./routes/games");
const mainRouter = require("./routes/main");

const PORT = 3000;
const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRouter,
  gamesRouter,
);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});