const { Router } = require("express");
const router = Router();

const Item = require("../models/Item");
const Param = require("../models/Param");

router.post("/items", [], async (req, res) => {
  console.log("ITEMS");
  try {
    const items = await Item.find({});
    if (!items) return res.status(400).json({ message: "Items not found" });
    res.json({ ...items });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.post("/params", [], async (req, res) => {
  const params = await Param.find({});
  if (!params) return res.status(400).json({ message: "Params not found" });
  res.json({ ...params });
});

// router.post("/date/add-date", [], async (req, res) => {
//   try {
//     const date = new Date(req.body); // new Date (model)
//     const game = new Game(date);

//     await game.save();
//     await date.save();
//     res.status(201).json({ message: `${game} on ${date} has been added!` });
//   } catch (e) {
//     console.log("Error:", e.message);
//     res.status(500).json({ message: "Server error! Please, try again!" });
//   }
// });

module.exports = router;
