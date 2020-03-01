const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const config = require('../config');
const jwt = require('jsonwebtoken');
router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((u) => {
            const token = jwt.sign({sub: u.id}, config.secret);
            let userWithOutPassword = u._doc;
            delete userWithOutPassword['password'];
            res.send({
                token: token,
                user: userWithOutPassword
            });
        })
        .catch(reason => res.send(reason));
});

router.post('/login', (req, res) => {
    const user = new User(req.body);
    User.findOne({username: user.username, password: user.password})
        .then((user) => {
            const token = jwt.sign({sub: user.id}, config.secret);
            let userWithOutPassword = user._doc;
            delete userWithOutPassword['password'];
            res.send({
                token: token,
                user: userWithOutPassword
            });
        })
        .catch(reason => res.send(reason));
});

router.get('/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then((user) => {
            let u = user._doc;
            delete u['password'];
            res.send({
                u
            });
        })
        .catch(reason => res.send(reason));
});

module.exports = router;
