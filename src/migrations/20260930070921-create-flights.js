"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Airplanes",
          key: "id",
        },
      },
      departureAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Airports",
          key: "code",
        },
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Airports",
          key: "code",
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
      },
      arrivalTime: {
        type: Sequelize.DATE,
      },
      boardingGate: {
        type: Sequelize.STRING,
      },
      totalSeats: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
