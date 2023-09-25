const router = require('express').Router();
const { Recipes,  Favorites } = require('../../db/models');

router.get('/product', async (req, res) => {
  try {
    const products = await Recipes.findAll(
     { include: { model: Favorites, where: {recipeId: 1}} },
    );
    res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});


// router.get('/:productId', async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const product = await Product.findOne({ where: { id: productId } });
//     res.json(product);
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

module.exports = router;
