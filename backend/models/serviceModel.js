const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    tem_price: {
      type: Number,
      required: true,
    },
    per_price: {
      type: Number,
      required: true,
    },

    images: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Service", serviceSchema);
