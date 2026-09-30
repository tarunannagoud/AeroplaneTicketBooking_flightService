const Crud = require("./crudRepository");
const { Flights } = require("../models");
const { where } = require("sequelize");
const { Airports, Airplane, City } = require("../models");

class Flight extends Crud {
  constructor() {
    super(Flights);
  }
  async findAllFlights(customFliter) {
    try {
      const response = await Flights.findAll({
        where: customFliter,
        include: [
          {
            model: Airplane,
            as: "Airplane",
            required: true,
          },
          {
            model: Airports,
            as: "departureAirport",
            required: true,
            include: [
              {
                model: City,
                required: true,
              },
            ],
          },
          {
            model: Airports,
            as: "arrivalAirport",
            required: true,
            include: [
              {
                model: City,
                required: true,
              },
            ],
          },
        ],
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Flight;
