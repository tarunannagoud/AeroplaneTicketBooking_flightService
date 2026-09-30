const { airportController } = require("../../controllers");

const express = require("express");

const router = express.Router();

router.post("/create", airportController.createController);

module.exports = router;
