const express = require('express');

const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");

/* routes */

const router = express.Router();


router.use("/users", userRoutes);
router.use("/trips", tripRoutes);


module.exports = router;