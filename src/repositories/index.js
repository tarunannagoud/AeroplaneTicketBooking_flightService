// const Crud = require("./crudRepository");
const airplane = require("./airplaneRepository");
const Flight = require("./flightsRepository");

module.exports = {
  // Crud,
  airplane,
  Airport: require("./airportRepository"),
  Flight,
};
