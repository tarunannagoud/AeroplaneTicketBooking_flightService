function createRecord(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(400).json({
      message: "modelNumber required",
      error: {},
      success: false,
    });
  }
  next();
}
module.exports = {
  createRecord,
};
