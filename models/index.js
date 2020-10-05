//database config

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/express-cats';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected' , () => console.log('MongoDB connected successfully.'));
mongoose.connection.on('error' , (err) => console.log(err));

module.exports = {
    Cat: require('./Cat')
};