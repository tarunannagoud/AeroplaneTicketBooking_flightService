const { airplaneService } = require("../services");

async function create(req, res) {
  try {
    const response = await airplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(200).json({
      message: "record created successfully",
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
async function findByid(req, res) {
  try {
    const response = await airplaneService.getAirplane(req.body.id);
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
    const response = await airplaneService.deleteAirplane(req.body.id);
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
  create,
  findByid,
  destroy,
};
