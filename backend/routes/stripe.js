const express = require("express");
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartState?.map((item) => {
    return {
      price_data: {
        currency: "CAD",
        product_data: {
          name: item?.productId?.title,
        },
        unit_amount: item?.productId?.price * 100,
      },
      quantity: item?.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/Orders`,
    cancel_url: `${process.env.CLIENT_URL}/Cart`,
  });

  res.send({ url: session.url });
});
router.post("/create-service-checkout-session", async (req, res) => {
  console.log("req.body.service", req.body);
  let totalAmount = 0;
  if (req?.body?.contractType == "permanent") {
    totalAmount = req?.body?.serviceState.per_price;
  } else {
    totalAmount = req?.body?.serviceState.tem_price;
  }
  const line_items = [
    {
      price_data: {
        currency: "CAD",
        product_data: {
          name: req?.body?.serviceState?.title,
        },
        unit_amount: totalAmount * 100,
      },
      quantity: "1",
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/Orders`,
    cancel_url:
      `${process.env.CLIENT_URL}/SingleService/` + req?.body?.serviceState._id,
  });

  res.send({ url: session.url });
});

module.exports = router;
