import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Start Socket IO</h1>");
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
