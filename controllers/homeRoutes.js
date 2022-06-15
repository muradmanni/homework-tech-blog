const router = require('express').Router();
const withAuth = require('../utils/auth');
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const dbPosts = await Post.findAll({});
        
        res.render('homepage' , {posts: dbPosts, layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login' , {layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbPosts = await Post.findAll({
            where: {
                id: req.session.userId
            }
        });
        res.render('dashboard' , {posts: dbPosts, loggedIn: req.session.loggedIn, layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newUser', async (req, res) => {
    try {
        res.render('signup' , {layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/newPost', withAuth, async (req, res) => {
    try {
        res.render('createpost' , {layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;