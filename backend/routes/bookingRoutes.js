const express = require("express");
const router = express.Router();

const {
createBooking,
getBookings,
checkIn,
checkOut
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// customer books room
router.post("/", protect, createBooking);

// admin & reception see bookings
router.get("/", protect, authorizeRoles("admin","reception"), getBookings);

// check-in
router.put("/checkin/:id", protect, authorizeRoles("admin","reception"), checkIn);

// check-out
router.put("/checkout/:id", protect, authorizeRoles("admin","reception"), checkOut);

module.exports = router;