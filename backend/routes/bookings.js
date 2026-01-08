const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET /api/bookings - Fetch all booked seats
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ bookedAt: -1 });
        res.json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch bookings',
            error: error.message
        });
    }
});

// POST /api/bookings - Create new bookings
router.post('/', async (req, res) => {
    try {
        const { seats } = req.body;

        // Validation
        if (!seats || !Array.isArray(seats) || seats.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Seats array is required and must not be empty'
            });
        }

        if (seats.length > 8) {
            return res.status(400).json({
                success: false,
                message: 'Cannot book more than 8 seats at once'
            });
        }

        // Validate each seat object
        for (const seat of seats) {
            if (!seat.seatId || !seat.row || !seat.column || seat.price === undefined) {
                return res.status(400).json({
                    success: false,
                    message: 'Each seat must have seatId, row, column, and price'
                });
            }
        }

        // Check if any seats are already booked
        const seatIds = seats.map(s => s.seatId);
        const existingBookings = await Booking.find({ seatId: { $in: seatIds } });

        if (existingBookings.length > 0) {
            const bookedSeats = existingBookings.map(b => b.seatId);
            return res.status(409).json({
                success: false,
                message: `Seats already booked: ${bookedSeats.join(', ')}`,
                bookedSeats
            });
        }

        // Create bookings
        const bookings = await Booking.insertMany(seats);

        res.status(201).json({
            success: true,
            message: `Successfully booked ${bookings.length} seat(s)`,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        console.error('Error creating bookings:', error);

        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: 'One or more seats are already booked'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to create bookings',
            error: error.message
        });
    }
});

// DELETE /api/bookings/reset - Reset all bookings
router.delete('/reset', async (req, res) => {
    try {
        const result = await Booking.deleteMany({});

        res.json({
            success: true,
            message: 'All bookings have been reset',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('Error resetting bookings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to reset bookings',
            error: error.message
        });
    }
});

module.exports = router;
