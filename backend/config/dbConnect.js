const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log(conn, "DB connected successfully");
  } catch (error) {
    throw new Error(error);
    console.log("DB error");
  }
};
module.exports = dbConnect;
