const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

// Routes

module.exports = {
    register: function (req, res) {
        //  on cree une variable (email) qui sera initialiser avec l'mail du req
        //Parametre
        const email = req.body.email;
        const username = req.body.username;
        const psswd = req.body.psswd;
        const bio = req.body.bio;

        //verifier si les Parametres son vide
        if (email == null || username == null) {
            return res.status(400).json({ 'error': 'missing parametres' });
        }

    

        models.users.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(_psswd, 5, function (err, bcryptePassword) {
                        const newuser = models.User.create({
                            email: email,
                            username: username,
                            psswd: bcryptePassword,
                            bio: bio,
                            isAdmin: 0

                        })
                    })
                        .then(function (newuser) {
                            return res.status(201).json({
                                'userMail': newuser.email
                            })
                        })
                } else {
                    return res.status(400).json({ 'error': 'user already exist' })
                }
            })
            .cath(function (err) {
                return res.status(500).json({ 'error': 'unable to verify user' });
            });


    },
    login: function (req, res) {

    }
}