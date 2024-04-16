const express = require("express");
const app = express();
app.listen(8080);

// app.use((req, res, next) => {
//   console.log("Welcome");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hello");
//   res.send("hi from second route");
// });

app.use("/users", (req, res, next) => {
  res.send("hi user from users route");
});

app.use("/", (req, res, next) => {
  res.send("hi user from / route");
  console.log("hello");
});
