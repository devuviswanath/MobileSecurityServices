const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productorderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingInfo: {
      fullName: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      other: {
        type: String,
        // required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },

    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
  },

  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Productorder", productorderSchema);
