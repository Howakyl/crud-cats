const express = require('express');
const router = express.Router();

const db = require('../models/index');
//REMEMBER,  --> CURRENT PATH IS CATS <--


//Cat INDEX - shows all cats in DB
router.get('/' , (req,res) => {
    db.Cat.find({} , (err, allCats) => {
        if (err) console.log(err);

        res.render('cats/indexCat' , {
            cats: allCats
        });
    });
});


//NEW Cat - this page will show the page to create a new cat
router.get('/new', (req, res) => res.render('cats/newCat'));

//CREATE Cat - This will add a Cat to the database
router.post('/', (req, res) => {
    req.body.longHaired = req.body.longHaired === 'on';

    db.Cat.create(req.body, (err, newCat) => {
        if (err) return console.log(err);

        res.redirect('/cats')
    });
});

//SHOW CURRENT CAT
router.get('/:catId' , (req, res) => {
    db.Cat.findById(req.params.catId , (err, currentCat) => {
        if (err) return console.log(err);
        
        const context = {
            cat: currentCat
        }
        res.render('cats/showCat' , context);
    });
});

//GET EDIT CAT
router.get('/:catId/edit' , (req,res) => {

    db.Cat.findById(req.params.catId, (err, currentCat) => {
        if (err) return console.log(err);

        const context = {
            cat: currentCat,
            longHaired: req.body.longHaired === 'on' ? true : false
        };

        res.render('cats/editCat' , context);
    });
});


//PUT UPDATE CAT
router.put('/:catId' , (req,res) => {
    req.body.longHaired = req.body.longHaired === 'on';

    db.Cat.findByIdAndUpdate(
        req.params.catId,
        req.body,
        {new: true},
        (err, updatedCat) => {
            if (err) return console.log(err);
            console.log(updatedCat);
            res.redirect(`/cats/${updatedCat._id}`);
        }
    );
});

//DELETE - REMOVE CAT
router.delete('/:catId' , (req,res) => {
    db.Cat.findByIdAndDelete(req.params.catId, (err, deletedCat) => {
        if (err) return console.log(err);

        console.log('deleted cat:' , deletedCat);
        res.redirect('/cats');
    });
});


module.exports = router;