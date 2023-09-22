const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.animalId } });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img, email } = req.body;
    const newUser = await User.create({
      name,
      img,
      email,
    });
    res.json(newUser);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await User.destroy({ where: { id: userId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { isAdmin } = req.body;
    const user = await User.findOne({ where: { id: userId } });
    user.isAdmin = isAdmin;
    user.save();
    res.json(user);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
