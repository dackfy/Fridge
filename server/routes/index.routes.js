const router = require('express').Router();

const usersApiRoute = require('./api/users.routes');

router.use('/api/users', usersApiRoute);

module.exports = router;
