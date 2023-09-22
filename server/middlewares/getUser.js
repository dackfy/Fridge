const { User } = require('../db/models');

async function getUser(req, res, next) {
  try {
    const { userId } = req.session;
    if (userId) {
      // достаем юзера, который авторизован сейчас, по айди из бд
      const user = await User.findOne({ where: { id: userId } });

      // кладем этого юзера в res.locals
      res.locals.user = user;
    }
    next();
  } catch (error) {
    console.log(error);
    next();
  }
}

module.exports = getUser;
