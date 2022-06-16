const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');

router.use('/', homeRoutes);
router.use('/users', apiRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
