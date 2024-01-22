import { express } from "express";
import { server } from "node:http";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Start Socket IO<h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
