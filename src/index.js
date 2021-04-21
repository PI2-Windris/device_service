const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const logger = require("pino")({ prettyPrint: true });

const app = express();

// Database config
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


mongoose.connection.once("open", () => {
  logger.info("MongoDB database connection established successfully");
});



// Routers
const updateCode = require("./routers/updateCode");
app.use("/", updateCode);

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log("Server running on port ", process.env.PORT);
});