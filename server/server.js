const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
const app = express();

app.use(express.json());
app.use(cors({ origin: "https://shopify-backend-challenge.netlify.app"}))
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to database"));

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.listen(3000, () => console.log("server started"));