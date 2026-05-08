function validateTask(req, res, next) {
  const { title } = req.body;

  // Check required field
  if (!title) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "Title is required"
      }
    });
  }

  next();
}

module.exports = validateTask;