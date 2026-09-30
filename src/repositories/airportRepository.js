const Crud = require("./crudRepository");
const { Airports } = require("../models");

class Airport extends Crud {
  constructor() {
    super(Airports);
  }
}

module.exports = Airport;
