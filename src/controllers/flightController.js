const { flightService } = require("../services");

async function createController(req, res) {
  try {
    const {
      flightId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      price,
      departureTime,
      arrivalTime,
      boardingGate,
      totalseats,
    } = req.body;
    const response = await flightService.createFlight({
      flightId,
      airplaneId,
      departureAirportId,
      arrivalAirportId,
      price,
      departureTime,
      arrivalTime,
      boardingGate,
      totalseats,
    });
    return res.status(200).json({
      message: "record created ssuccessfully",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "record created failed",
      data: {},
      error: error.message,
      success: false,
    });
  }
}
async function findAllFlightController(req, res) {
  try {
    console.log(req.query, "controller");
    let response = await flightService.findAllFlights(req.query);

    return res.status(200).json({
      message: "data fetched successfully",
      error: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "record fetched failed",
      data: {},
      error: error,
      success: false,
    });
  }
}

module.exports = {
  createController,
  findAllFlightController,
};
