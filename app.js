const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());

// load all routes
app.use("/api", routes);
//app.use("/uploads", express.static("uploads"));

app.use(cors());

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
