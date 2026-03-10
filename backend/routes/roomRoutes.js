const express = require("express");
const router = express.Router();

const {
  createRoom,
  getRooms,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Admin creates room
router.post("/", protect, authorizeRoles("admin"), createRoom);

// Anyone logged in can see rooms
router.get("/", protect, getRooms);

// Admin updates room
router.put("/:id", protect, authorizeRoles("admin"), updateRoom);

// Admin deletes room
router.delete("/:id", protect, authorizeRoles("admin"), deleteRoom);

module.exports = router;