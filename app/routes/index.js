const router = require('express').Router();
const v1_routes = require('./v1');

router.use('/v1',v1_routes);

module.exports = router;