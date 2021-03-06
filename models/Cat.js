const mongoose = require('mongoose');

const catSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
    },
    breed: {
        type: String,
    },
    color: {
        type: String,
    },
    likes: [
        {
            type: String,
        }
    ],
    longHaired: {
        type: Boolean,
    }
} , {timestamps: true});

const Cat = mongoose.model('Cat' , catSchema);
module.exports = Cat;


// const cats = [{
//     name: 'Fuzzy',
//     breed: 'russian blue',
//     color: 'grey',
//     likes: ['playing with yarn', 'biting'],
//     longHaired: false,
// }, {
//     name: 'Fluffy',
//     breed: 'calico',
//     color: 'calico',
//     likes: ['sleeping' , 'scratching couches'],
//     longHaired: false,
// }, {
//     name: 'Pirate',
//     breed: 'bombay',
//     color: 'black',
//     likes: ['chasing mice' , 'climbing up to high places'],
//     longHaired: false,
// }];

// module.exports = cats;