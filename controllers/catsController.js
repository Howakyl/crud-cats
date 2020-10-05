const express = require('express');
const router = express.Router();

const db = require('../models/index');
//REMEMBER,  --> CURRENT PATH IS CATS <--


//Cat INDEX - shows all cats in DB
router.get('/' , (req,res) => res.send('these are all the cats!'));


//NEW Cat - this page will show the page to create a new cat
router.get('/new', (req, res) => res.render('cats/newCat'));

//CREATE Cat - This will add a Cat to the database
router.post('/', (req, res) => {
    req.body.longHaired = req.body.longHaired === 'on';

    db.Cat.create(req.body, (err, newCat) => {
        if (err) return console.log(err);

        res.send('Cat added!');
    });
});


module.exports = router;