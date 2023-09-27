const router = require('express').Router();
const { log } = require('console');
const { Favorite, Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.session.user_id },
      include: [{ model: Recipe }],
    });
    // console.log(favorites, '-------------------------------------------');
    res.json(favorites);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const userIdsess = req.session.user_id;
    // console.log(id, userIdsess, '0000000000');
    if (id && userIdsess) {
      let recipesFavorite = await Favorite.findOne({
        where: { recipeId: id, userId: userIdsess },
      });
      // console.log(recipesFavorite, '555555555555555555');
      if (recipesFavorite) {
        await Favorite.destroy({
          where: { id: recipesFavorite.id },
        });
        const favorites = await Favorite.findAll({
          where: { userId: userIdsess },
          include: [{ model: Recipe }],
        });
        res.json(favorites);
      } else {
        const favorite = await Favorite.create({
          userId: userIdsess,
          recipeId: id,
        });
        // console.log(favorite, '4444444444444444444444444444444444444444444');
        const favorites = await Favorite.findAll({
          where: { userId: userIdsess },
          include: [{ model: Recipe }],
        });
        res.json(favorites);
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idFavorite', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const { user_id } = req.session;
    const result = await Favorite.destroy({
      where: { recipeId: idFavorite, userId: user_id },
    });
    if (result > 0) {
      res.json({ message: 'success', id: +idFavorite });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
