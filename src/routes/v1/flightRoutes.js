const { flightController } = require("../../controllers");

const express = require("express");

const router = express.Router();

router.post("/create", flightController.createController);
router.get("/", flightController.findAllFlightController);

module.exports = router;
