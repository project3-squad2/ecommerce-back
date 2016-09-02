'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: {
      type: Array,
      default: [],
      required: true,
  },
      total_price: {
        type: Number,
        required: true,
  },
      paid: {
        type: Boolean,
    },
      date_purchased: {
        type: Date,
        match: /\d{4}-\d{2}-\d{2}/,
    },
      token: {
        type: String,
        required: true,
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

// orderSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
