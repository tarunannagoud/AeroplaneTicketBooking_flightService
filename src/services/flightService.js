const { where, Op } = require("sequelize");
const { Flight } = require("../repositories");
const flightService = new Flight();

async function createFlight(data) {
  try {
    console.log("service", data);
    const response = await flightService.create(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function findAllFlights(query) {
  try {
    let customFilter = {};

    if (query.price) {
      let [min, max] = query.price.split("-");
      customFilter.price = {
        [Op.between]: [min, max],
      };
    }
    if (query.places) {
      let [from, arr] = query.places.split("-");
      customFilter.departureAirportId = {
        [Op.eq]: from,
      };
      customFilter.arrivalAirportId = {
        [Op.eq]: arr,
      };
    }
    if (query.date) {
      const date = new Date(query.date);

      const endOfDay = new Date(date);
      endOfDay.setUTCHours(23, 59, 50, 0);

      customFilter.departureTime = {
        [Op.and]: [
          {
            [Op.gte]: date,
          },
          {
            [Op.lte]: endOfDay,
          },
        ],
      };
    }

    const response = await flightService.findAllFlights(customFilter);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createFlight,
  findAllFlights,
};
