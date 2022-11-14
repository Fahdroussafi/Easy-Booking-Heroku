const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dbConfig = require("./config/dbConfig");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/buses", require("./routes/busesRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingsRoutes"));
app.use("/api/cities", require("./routes/citiesRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
