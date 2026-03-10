const Booking = require("../models/Booking");
const Room = require("../models/Room");

// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {

    const { room, checkInDate, checkOutDate } = req.body;

    const booking = await Booking.create({
      user: req.user.id,
      room,
      checkInDate,
      checkOutDate
    });

    // mark room as booked
    await Room.findByIdAndUpdate(room, { status: "booked" });

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET ALL BOOKINGS
exports.getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("room", "roomNumber type");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// CHECK-IN
exports.checkIn = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "checked-in" },
      { new: true }
    );

    res.json(booking);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// CHECK-OUT
exports.checkOut = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "checked-out" },
      { new: true }
    );

    // free the room
    await Room.findByIdAndUpdate(booking.room, {
      status: "available"
    });

    res.json(booking);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};