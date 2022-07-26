const { Router } = require('express');
const { addUser } = require('../controllers/users');

const userRouter = Router();

userRouter.post('', addUser);

module.exports = userRouter;
