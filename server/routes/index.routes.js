const router = require('express').Router();

const usersApiRoute = require('./api/users.routes');
const recipesApiRoute = require('./api/recipes.routes');
const authApiRoute = require('./api/auth.api.routes');

router.use('/api/auth', authApiRoute);
router.use('/api/users', usersApiRoute);
router.use('/api/recipes', recipesApiRoute);

module.exports = router;
