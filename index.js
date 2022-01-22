import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
