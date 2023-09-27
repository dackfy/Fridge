const router = require('express').Router();
const { Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
});

router.post('/', async (req, res) => {
  try {
    const { title, img, ingridients, instruction } = req.body;
    const newRecipe = await Recipe.create({
      title,
      img,
      ingridients,
      instruction,
    });

    await Favorite.create({
      userId: userIdsess,
      recipeId: newRecipe.id,
    });

    res.json(newRecipe);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
