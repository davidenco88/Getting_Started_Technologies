import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const server = createServer(app);

// utiliza la convensión de Node.js para nombrar variables especiales
// en este caso una varibales del entorno de ejecución.
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  console.log(__dirname);
});
