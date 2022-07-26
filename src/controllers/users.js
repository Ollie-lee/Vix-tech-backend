const User = require("../models/user");

const user_database = [];

async function addUser(req, res) {
  const { name, gender, age } = req.body;
  const user = new User(name, gender, age);
  user_database.push(user);

  return res.status(201).json(user);
}

async function getAllUsers(req, res) {
  return res.status(200).json(user_database);
}

async function deleteUser(req, res) {
  const userIndex = user_database.findIndex(
    (element) => element.id === req.params.userId
  );

  if (userIndex === -1) return res.status(404).json({ msg: "user not found" });

  user_database.splice(userIndex, 1);
  return res.status(204).json({ message: "user deleted successfully" });
}

async function updateUser(req, res) {
  const userIndex = user_database.findIndex((element) => {
    return element.id === req.params.userId;
  });

  if (userIndex === -1) return res.status(404).json({ msg: "user not found" });

  const { name, gender, age } = req.body;
  const user = new User(name, gender, age);
  user_database.splice(userIndex, 1, user);

  return res.status(200).json(user);
}

async function getUser(req, res) {
  const userIndex = user_database.findIndex(
    (element) => element.id === req.params.userId
  );

  if (userIndex === -1) return res.status(404).json({ msg: "user not found" });

  return res.status(200).json(user);
}

module.exports = {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
};
