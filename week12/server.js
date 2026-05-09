const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

// --------------------
// USERS (hardcoded)
// --------------------
const users = [
  {
    email: "admin@example.com",
    password: "password123",
    role: "admin"
  },
  {
    email: "user@example.com",
    password: "password123",
    role: "user"
  }
];

// --------------------
// TASKS (hardcoded)
// --------------------
const tasks = [
  {
    id: 1,
    title: "Admin Task",
    ownerEmail: "admin@example.com"
  },
  {
    id: 2,
    title: "User Task",
    ownerEmail: "user@example.com"
  }
];

// --------------------
// MIDDLEWARE
// --------------------
function requireLogin(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({
      error: {
        code: "NOT_AUTHENTICATED",
        message: "You must be logged in."
      }
    });
  }
  next();
}

function requireAdmin(req, res, next) {
  if (req.session.user.role !== "admin") {
    return res.status(403).json({
      error: {
        code: "FORBIDDEN",
        message: "Admin access required."
      }
    });
  }
  next();
}

// --------------------
// ROUTES
// --------------------

// Public route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the authorization demo."
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      error: {
        code: "INVALID_CREDENTIALS",
        message: "Invalid email or password."
      }
    });
  }

  req.session.user = {
    email: user.email,
    role: user.role
  };

  res.json({
    message: "Login successful",
    user: req.session.user
  });
});

// LOGOUT
app.post("/logout", requireLogin, (req, res) => {
  req.session.destroy(() => {
    res.json({
      message: "Logout successful"
    });
  });
});

// PROFILE (protected)
app.get("/profile", requireLogin, (req, res) => {
  res.json({
    user: req.session.user
  });
});

// ADMIN ONLY
app.get("/admin", requireLogin, requireAdmin, (req, res) => {
  res.json({
    message: "Welcome admin"
  });
});

// TASKS (ownership + admin access)
app.get("/tasks/:id", requireLogin, (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Task not found"
      }
    });
  }

  const isAdmin = req.session.user.role === "admin";
  const isOwner = req.session.user.email === task.ownerEmail;

  if (!isAdmin && !isOwner) {
    return res.status(403).json({
      error: {
        code: "FORBIDDEN",
        message: "You do not have access to this task"
      }
    });
  }

  res.json({
    task
  });
});

// --------------------
// START SERVER
// --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});