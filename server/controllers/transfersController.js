const { User } = require('../models/usersModels');
const { Transfer } = require('../models/transfersModels');

const createTransfer = async (req, res) => {
  try {
    let { accountNumberReceiver, accountNumberSender, money } = req.body;
    money = parseInt(money);

    const accountSender = await User.findOne({
      where: { accountNumber: accountNumberSender },
    });

    const accountReceiver = await User.findOne({
      where: { accountNumber: accountNumberReceiver },
    });

 
    accountSender.amount = accountSender.amount - money;
    await User.update(
      { amount: accountSender.amount },
      { where: { accountNumber: accountNumberSender } }
    );

 
    accountReceiver.amount = accountReceiver.amount + money;
    await User.update(
      { amount: accountReceiver.amount },
      { where: { accountNumber: accountNumberReceiver } }
    );
 
    res.status(200).json({
      msg: 'Se ha hecho la transferencia correctamente',
    });

    await Transfer.create({
      senderUserId: accountNumberSender,
      receiverUserId: accountNumberReceiver,
      amount: money,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTransfer,
};
