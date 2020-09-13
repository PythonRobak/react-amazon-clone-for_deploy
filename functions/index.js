const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQwRAAYetRmaNhRTaYQfvsN2IoyHjY9pRgxClPQmrn2wT5TYoaMBcJn4PMhDsMUiL3bXNSgA2pTYdU5YDsPTMkB000o31UMAb"
);

//API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) =>
  response
    .status(200)
    .send("Hello there! You are trying to use API made by Adrian Jarocki")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recived for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Dev endpoint
// http://localhost:5001/clone-1337/us-central1/api
