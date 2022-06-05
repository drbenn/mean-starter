const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  //Server Test Data
  const posts = [
    {
      id: "001",
      title: "1st Post",
      content: "Data 1 coming from server",
    },
    {
      id: "002",
      title: "2nd Post",
      content: "Data 2 coming from server",
    },
    {
      id: "003",
      title: "3rd Post",
      content: "Data 3 coming from server",
    },
    {
      id: "004",
      title: "4th Post",
      content: "Data 4 coming from server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
