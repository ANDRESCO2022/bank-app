const express = require('express');

const { userExists } = require('../middlewares/usersMiddlewares');
const {
  createUserValidations,
  loginUserValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');

const {
  getAllUsersTransfers,
  createUser,
  getUserById,
  login,
} = require('../controllers/usersController');

const router = express.Router();

router.get('/:id/history', getAllUsersTransfers);

router.get('/:id', userExists, getUserById);

router.post('/signup', createUserValidations, checkValidations, createUser);

router.post('/login', loginUserValidations, checkValidations, login);

module.exports = { usersRouter: router };
