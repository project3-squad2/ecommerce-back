'use strict';

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-back';
// const uri = process.env.MONGOLAB_URI || 'mongodb://localhost/ecommerce-back';
mongoose.Promise = global.Promise;
mongoose.connect(uri);

module.exports = mongoose;
