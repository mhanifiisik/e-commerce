const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const ordertRoute = require("./routes/order");
const cardRoute = require("./routes/card");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", ordertRoute);
app.use("/api/cards", cardRoute);
app.use("/api/checkout", stripeRoute);

app.listen(8080, () => {
  console.log("Backend first codding");
});
