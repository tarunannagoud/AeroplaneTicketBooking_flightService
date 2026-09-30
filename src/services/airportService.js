const { where } = require("sequelize");
const { Airport } = require("../repositories");
const airportService = new Airport();

async function createAirport(data) {
  try {
    console.log("service", data);
    const response = await airportService.create(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function deleteAirport(id) {
  try {
    const response = await airportService.destroy(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function updateAirport(data) {
  try {
    const response = await airportService.update(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function getAirport(id) {
  try {
    const response = await airportService.get(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = {
  createAirport,
  deleteAirport,
  updateAirport,
  getAirport,
};
