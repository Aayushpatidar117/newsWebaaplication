import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("hello this is first rought");
  res.send(
    "<h1>Hello this is my Home rought on this home rought i will start   learning roughting</h1>",
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("here the server is running");
});
