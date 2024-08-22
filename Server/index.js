const express = require("express");

const app = express();
const PORT = 3000;

const handleUnknownEndpoint = (request, response) => {
  response.status(404).json({ error: "unknown endpoint" });
};

app.use(express.json());
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(handleUnknownEndpoint);
