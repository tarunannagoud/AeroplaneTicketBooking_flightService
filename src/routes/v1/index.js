const airplaneRouter = require("./airplaneControllerRoute");
const airportRouter = require("./airportControllerRoutes");
const flightRouter = require("./flightRoutes");
const express = require("express");

const router = express.Router();

router.use("/airplane", airplaneRouter);
router.use("/airport", airportRouter);
router.use("/flight", flightRouter);

module.exports = router;
