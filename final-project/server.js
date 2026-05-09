const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
  })
);

// routes will go here later
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});