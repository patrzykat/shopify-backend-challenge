const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
const app = express();

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.listen(3000, () => console.log("server started"));
