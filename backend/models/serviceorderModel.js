const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var serviceorderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    billingInfo: {
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
          ref: "Service",
          required: true,
        },
        per_price: {
          type: Number,
          required: true,
        },
        tem_price: {
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
    expiredDate: { type: Date, required: true },
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
