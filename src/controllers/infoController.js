const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "api is live",
    data: [],
    error: {},
  });
};

module.exports = {
  info,
};
