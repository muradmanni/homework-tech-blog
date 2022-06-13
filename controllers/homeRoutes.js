const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('homepage' , {layout :'main'});
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
        res.render('login' , {layout :'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;