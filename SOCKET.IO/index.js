import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import { Socket } from "engine.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
// utiliza la convensión de Node.js para nombrar variables especiales
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("Indentify user connection");
  socket.on("disconnect", () => {
    console.log("Indentify user disconnection");
  });
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
