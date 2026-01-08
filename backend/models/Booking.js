const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  seatId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  row: {
    type: String,
    required: true,
    trim: true
  },
  column: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  bookedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
bookingSchema.index({ seatId: 1 });

module.exports = mongoose.model('Booking', bookingSchema);
