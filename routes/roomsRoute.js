const express = require('express'); 
const router = express.Router();

const Room = require('../models/room');

// Route to get all rooms
router.get("/getallrooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        return send(rooms);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
