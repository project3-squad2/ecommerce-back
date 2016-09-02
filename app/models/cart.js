'use strict';

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: {
      type: Array,
      default: [],
      required: true,
  },
    total_quantity: {
      type: Number,
      required: true
    },
    total_price: {
      type: Number,
      required: true
  },
    paid: {
      type: Boolean,
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

// cartSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;