const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const postRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/users', apiRoutes);
router.use('/post', apiRoutes);

module.exports = router;
