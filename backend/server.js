const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const serviceRouter = require("./routes/serviceRoute");
const productRouter = require("./routes/productRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
dbConnect();
// ****************
let origins = [""]; //set your prod origins here
app.use((req, res, next) => {
  let origin = req.headers.origin;
  if (process.env.NODE_ENV === "production") {
    let org = origins.find((o) => o === origin) || origins[0];
    res.setHeader("Access-Control-Allow-Origin", org);
  } else {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  //res.setHeader("Content-Type", "application/json");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  if ("OPTIONS" === req.method) {
    return res.status(200).send("Ok");
  } else {
    next();
  }
});
// ************

app.use(morgan("dev"));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/service", serviceRouter);
app.use("/api/product", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runninggg at PORT ${PORT}`);
});
