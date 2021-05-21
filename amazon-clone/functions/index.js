const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Hyq4eIb6Q7UHbC8i3d0yqK5oShsQBPG9ZPwzAbgVlJpoKWhrms36LROI4lSJV7PDVPuLPULVK0Qk4mzbQYFbisj00lAxunPvu");
// ApI
//App config
const app = express();

//Middlewarts
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    
    const total = request.query.total;
    console.log("Payment Request Recieved !!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
        payment_method_types=["card"],
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
 
//Listen Command
exports.api = functions.https.onRequest(app);
