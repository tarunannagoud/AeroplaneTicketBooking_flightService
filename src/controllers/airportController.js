const { airportServices } = require("../services");

async function createController(req, res) {
  try {
    const { name, code, address, cityId } = req.body;
    const response = await airportServices.createAirport({
      name,
      code,
      address,
      cityId,
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
async function findByid(req, res) {
  try {
    const response = await airportServices.getAirport(req.body.id);
    return res.status(200).json({
      message: " successfully fetched",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      message: "something went wrong",
      data: {},
      error: { error: error.message },
      success: false,
    });
  }
}
async function destroy(req, res) {
  try {
    const response = await airportServices.deleteAirport(req.body.id);
    return res.status(200).json({
      message: " successfully deleted",
      data: response,
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      message: "something went wrong",
      data: {},
      error: { error: error.message },
      success: false,
    });
  }
}
module.exports = {
  createController,
  destroy,
  findByid,
};
