const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var serviceorderSchema = new mongoose.Schema(
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
      number: {
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
      contract_type: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },

    orderItems: [
      {
        service: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        contract_type: {
          type: String,
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
module.exports = mongoose.model("Serviceorder", serviceorderSchema);
