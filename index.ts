import express from "express";

const app = express();
const port = 3000;

type HelloWorldResponse = {
  message: string;
};

app.get("/", (_req, res) => {
  const response: HelloWorldResponse = { message: "Hello World!" };
  res.json(response);
});

app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
