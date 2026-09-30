const express = require("express");
const { airplaneController } = require("../../controllers");
const { createRecord } = require("../../middlewares");

const router = express.Router();

router.post("/create", createRecord, airplaneController.create);
router.get("/find", airplaneController.findByid);
router.post("/delete", airplaneController.destroy);

module.exports = router;
