const router = require('express').Router();
const { Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
});

module.exports = router;
