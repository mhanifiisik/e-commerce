const Card = require("../models/Card");
const {
  verifiedToken,
  verifyTokenandAuthorization,
  verifyTokenandAuthorizationAdmin,
} = require("./verifiedToken");

const router = require("express").Router();

//CREATE

router.post("/", verifiedToken, async (req, res) => {
  const newCard = new Card(req.body);

  try {
    const savedCard = await newCard.save();
    res.status(200).json(savedCard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenandAuthorization, async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//DELETE

router.delete("/:id", verifyTokenandAuthorization, async (req, res) => {
  try {
    await Card.findByIdDelete(req.params.id);
    res.status(200).json("Card has been deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET
router.get("/find/:userId", verifyTokenandAuthorization, async (req, res) => {
  try {
    const card = await Card.findOne({ userId: req.params.userId });

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//GET ALL USER
router.get("/", verifyTokenandAuthorizationAdmin, async (req, res) => {
  try {
    const carts = await Card.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
