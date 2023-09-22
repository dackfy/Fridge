const router = require('express').Router();

const usersApiRoute = require('./api/users.routes');
const authApiRoute=require('./api/auth.api.routes')

router.use('/api/auth', authApiRoute);
router.use('/api/users', usersApiRoute);

module.exports = router;
