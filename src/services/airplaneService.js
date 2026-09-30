const { where } = require("sequelize");
const { airplane } = require("../repositories");
const Airplane = new airplane();

async function createAirplane(data) {
  try {
    console.log("service", data);
    const response = await Airplane.create(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function deleteAirplane(id) {
  try {
    const response = await Airplane.destroy(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function updateAriplane(data) {
  try {
    const response = await Airplane.update(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function getAirplane(id) {
  try {
    const response = await Airplane.get(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = {
  createAirplane,
  deleteAirplane,
  updateAriplane,
  getAirplane,
};
