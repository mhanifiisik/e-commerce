const Product = require("../models/Product");
const {
  verifiedToken,
  verifyTokenandAuthorization,
  verifyTokenandAuthorizationAdmin,
} = require("./verifiedToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenandAuthorizationAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//DELETE

router.delete("/:id", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    await Product.findByIdDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET ALL products
router.get("/", async (req, res) => {
  const query = req.query.new;
  const queryCategory = req.query.new;
  try {
    let products;
    if (query) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
