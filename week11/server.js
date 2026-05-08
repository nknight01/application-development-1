const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30
    }
  })
);

// Demo user
const demoUser = {
  email: "student@example.com",
  password: "password123",
  name: "Demo Student"
};

// Middleware function
function requireLogin(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({
      error: {
        code: "NOT_AUTHENTICATED",
        message: "You must be logged in"
      }
    });
  }
  next();
}

// 👇 THIS IS WHERE YOUR LOGIN ROUTE GOES
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === demoUser.email && password === demoUser.password) {
    req.session.user = {
      email: demoUser.email,
      name: demoUser.name
    };

    return res.status(200).json({
      message: "Login successful",
      user: req.session.user
    });
  }

  return res.status(401).json({
    error: {
      code: "INVALID_CREDENTIALS",
      message: "Email or password is incorrect"
    }
  });
});

// Other routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.get("/profile", requireLogin, (req, res) => {
  res.json({ user: req.session.user });
});

app.post("/logout", requireLogin, (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out" });
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});