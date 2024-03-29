const Order = require("../models/Order");
const {
  verifiedToken,
  verifyTokenandAuthorization,
  verifyTokenandAuthorizationAdmin,
} = require("./verifiedToken");

const router = require("express").Router();

//CREATE

router.post("/", verifiedToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//DELETE

router.delete("/:id", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    await Order.findByIdDelete(req.params.id);
    res.status(200).json("Card has been deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET
router.get("/find/:userId", verifyTokenandAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET ALL USER
router.get("/", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/income", verifyTokenandAuthorizationAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
