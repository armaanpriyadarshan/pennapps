const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");


const { protect } = require("../middleware/authMiddleware");

const { 
    addTrip, 
    getAllTrips
} = require("../controllers/tripsController");

router.post("/", protect, upload.array("photos"), addTrip);
router.get("/", getAllTrips);

module.exports = router;