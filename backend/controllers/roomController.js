const Room = require("../models/Room");

// CREATE ROOM
exports.createRoom = async (req, res) => {
  try {

    const room = await Room.create(req.body);

    res.status(201).json(room);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET ALL ROOMS
exports.getRooms = async (req, res) => {
  try {

    const rooms = await Room.find();

    res.json(rooms);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE ROOM
exports.updateRoom = async (req, res) => {
  try {

    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(room);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE ROOM
exports.deleteRoom = async (req, res) => {
  try {

    await Room.findByIdAndDelete(req.params.id);

    res.json({ message: "Room deleted" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};