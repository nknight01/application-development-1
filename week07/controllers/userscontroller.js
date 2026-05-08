let users = [
  { id: 1, name: "John Doe" }
];

let nextUserId = 2;

// GET all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET single user
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: {
        code: "USER_NOT_FOUND",
        message: "User not found"
      }
    });
  }

  res.json(user);
};

// CREATE user
exports.createUser = (req, res) => {

  if (!req.body.name) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "Name is required"
      }
    });
  }

  const newUser = {
    id: nextUserId++,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

// UPDATE user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: {
        code: "USER_NOT_FOUND",
        message: "User not found"
      }
    });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  res.json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id != req.params.id);

  res.status(204).send();
};