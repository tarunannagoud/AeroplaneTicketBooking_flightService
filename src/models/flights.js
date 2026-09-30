"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        as: "Airplane",
      });
      this.belongsTo(models.Airports, {
        foreignKey: "departureAirportId",
        targetKey: "code",
        as: "departureAirport",
      });
      this.belongsTo(models.Airports, {
        foreignKey: "arrivalAirportId",
        targetKey: "code",
        as: "arrivalAirport",
      });
      // this.belongsTo(models.Airplane, {
      //   foreignKey: "totalSeats",
      // });
    }
  }
  Flights.init(
    {
      flightId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Flights",
    },
  );
  return Flights;
};
