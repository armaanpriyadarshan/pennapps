const express = require('express');

const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
const errorHandler = require('./middleware/errorMiddleware');

/* routes */

const router = express.Router();


router.use("/users", userRoutes);
router.use("/trips", tripRoutes);

router.use(errorHandler);


module.exports = router;