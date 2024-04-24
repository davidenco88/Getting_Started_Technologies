import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is Getting Started for Api Node with Typescript");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
