const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/Auth");
const ProductModel = require("../Models/productSchema");
const {postProduct,getProduct, getProductByID ,deleteProduct}= require("../Controllers/ProductController");


router.get("/get", authMiddleware, (req, res) => {
  console.log("------> Logged In User Details:", req.user);
  res.status(200).json([
    {
      name: "Pizza",
      price: "500",
    },
    {
      name: "Burgur",
      price: "100", 
    },
  ]);
});


router.post("/", postProduct);

router.get("/", getProduct);
router.get("/:restaurant_id", getProductByID);

router.delete("/",deleteProduct);

module.exports = router;
