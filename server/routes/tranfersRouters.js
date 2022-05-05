const express = require('express');
const {
  accountExists,
  enoughMoney,
} = require('../middlewares/trasfersMiddlewares');

const { createTransfer } = require('../controllers/transfersController');

const router = express.Router();

router.post('/', accountExists, enoughMoney, createTransfer);

module.exports = { transfersRouter: router };
