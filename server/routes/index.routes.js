const router = require('express').Router();

const usersApiRoute = require('./api/users.routes');
const recipesApiRoute = require('./api/recipes.routes');
const authApiRoute = require('./api/auth.api.routes');

const favoritesApiRoute = require('./api/favorite.api.routes');



router.use('/api/auth', authApiRoute);
router.use('/api/users', usersApiRoute);
router.use('/api/recipes', recipesApiRoute);

router.use('/api/favorites', favoritesApiRoute);


module.exports = router;
