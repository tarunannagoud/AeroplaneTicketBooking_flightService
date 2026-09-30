const express = require("express");
const apiRoutes = require("./routes");

const { PORT } = require("./config/serverConfig");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.use("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => {
  console.log("server satrted");
});
