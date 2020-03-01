const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const config = require('../config');
const jwt = require('jsonwebtoken');
router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.send('register success'))
        .catch(reason => res.send(reason));
});

router.post('/login', (req, res) => {
    const user = new User(req.body);
    User.findOne({username: user.username, password: user.password})
        .then((user) => {
            const token = jwt.sign({sub: user.id}, config.secret);
            res.send({
                token: token
            });
        })
        .catch(reason => res.send(reason));
});

module.exports = router;
