const Crud = require("./crudRepository");
const { Airplane } = require("../models");
class AirplaneRepository extends Crud {
  constructor() {
    super(Airplane);
  }
}
module.exports = AirplaneRepository;
