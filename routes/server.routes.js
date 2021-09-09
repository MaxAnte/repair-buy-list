const { Router } = require("express");
const router = Router();

const Item = require("../models/Item");
const Param = require("../models/Param");

router.get("/items", [], async (req, res) => {
  try {
    const items = await Item.find({});
    if (!items) return res.status(400).json({ message: "Items not found" });
    res.json({ ...items });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.post("/add-item", [], async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ message: `${req.body.name} has been added!` });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.post("/edit-item", [], async (req, res) => {
  try {
    const { _id, name, price, quantity, tags } = req.body;
    const item = await Item.findOne({ _id });
    item.name = name;
    item.price = price;
    item.quantity = quantity;
    item.tags = tags;
    await item.save();
    res.status(201).json({ message: `${name} has been changed!` });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.post("/delete-item", [], async (req, res) => {
  try {
    const { name } = req.body;
    await Item.deleteOne({ name });
    res.status(201).json({ message: `${name} has been removed!` });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.get("/rooms", [], async (req, res) => {
  try {
    const params = await Param.find({});
    if (!params) return res.status(400).json({ message: "Rooms not found" });
    res.json({ ...params });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

router.post("/add-param", [], async (req, res) => {
  try {
    const { name, width, length } = req.body;
    const param = new Param();
    param.name = name;
    param.width = width;
    param.length = length;
    await param.save();
    res.status(201).json({ message: `${name} has been added!` });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

// router.post("/edit-param", [], async (req, res) => {
//   try {
//     const item = new Item(req.body);
//     await item.save();
//     res.status(201).json({ message: `${req.body.name} has been added!` });
//   } catch (e) {
//     console.error("Error on fetch items:", e.message);
//   }
// });

router.post("/delete-param", [], async (req, res) => {
  try {
    const { name } = req.body;
    await Param.deleteOne({ name });
    res.status(201).json({ message: `${name} has been removed!` });
  } catch (e) {
    console.error("Error on fetch items:", e.message);
  }
});

module.exports = router;
