const mongoose = require('mongoose')

const URI = process.env.DATABASE

    mongoose.connect(URI)
    .then(( ) => console.log('Databse connection successful'))
    .catch(err => console.log(err));
