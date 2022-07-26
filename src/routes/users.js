const { Router } = require("express");
const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
	getUser
} = require("../controllers/users");

const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getUser);
userRouter.delete("/:userId", deleteUser);
userRouter.put("/:userId", updateUser);

module.exports = userRouter;
