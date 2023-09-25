const router = require('express').Router();

const usersApiRoute = require('./api/users.routes');
const recipesApiRoute = require('./api/recipes.routes');
const authApiRoute = require('./api/auth.api.routes');
// const categoryApiRouter = require('./api/category.api.routes');
const delitionApiRouter = require('./api/apiDelishos');


router.use('/api/food', delitionApiRouter);
router.use('/api/auth', authApiRoute);
router.use('/api/users', usersApiRoute);
router.use('/api/recipes', recipesApiRoute);
// router.use('/api/category', categoryApiRouter);
module.exports = router;
