const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./Routes/authRouter");
const product = require("./Routes/productRouter");
const restaurant = require("./Routes/restaurantRouter");
const { connectMongoDB } = require("./MongoDBConn");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB Connection
connectMongoDB(
  "mongodb+srv://kr:krishna123@swiggy-db.lp3w8.mongodb.net/?retryWrites=true&w=majority&appName=swiggy-db",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error in MongoDB: " + err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/product", product);
app.use("/restaurant", restaurant);

app.listen(PORT, () => {
  console.log(`Server is started! at http://localhost:${PORT}`);
});
