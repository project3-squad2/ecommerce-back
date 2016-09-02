'use strict';

const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  image: {
    type: String,
    required: true
  },
    description: {
      type: String,
      required: true
  },
    price: {
      type: Number,
      required: true
    },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  // toJSON: { virtuals: true },
});

// monsterSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;
