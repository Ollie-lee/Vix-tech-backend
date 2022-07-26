const User = require("../models/user");

const user_database = [];

async function addUser(req, res) {
  const { name, gender, age } = req.body;
  const user = new User(name, gender, age);
  user_database.push(user);

  return res.status(201).json(user);
}

module.exports = {
  addUser,
};
