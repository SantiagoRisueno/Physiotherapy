const express = require("express");

const router = express.Router();
const History = require("../models/History");

router.get("/", async (req, res) => {
  const data = await History.find({});
  res.send(data);
});

router.get("/:idHistory", async (req, res) => {
  const data = await History.findOne({
    idHistory: req.params.idHistory,
  });
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("History Not Found.");
  }
});

router.post("/", async (req, res) => {
  const data = new History({
    idHistory: req.body.idHistory,
    idAssignament: req.body.idAssignament,
    treatment: req.body.treatment,
    pathology: req.body.pathology
  });
  const dataFound = await History.findOne({
    idHistory: req.body.idHistory,
  });
  if (dataFound){
    res.status(404).send({message: "History already exists.", data: dataFound});
  }else{
    const savedData = await data.save();
    res.status(201).send({ message: "New History Created", data: savedData });
  }
});

// Delete
router.delete("/:idHistory", async (req, res) => {
  const data = await History.findOne({
    idHistory: req.params.idHistory
  });
  if (data) {
    const removeData = await data.remove();
    res.send(removeData);
  } else {
    res.status(404).send("History not Found.");
  }
});

//Update
router.put("/:idHistory", async (req, res) => {
  const data = await History.findOne({ idHistory: req.params.idHistory });
  if (data) {
    data.idHistory= req.body.idHistory;
    data.idAssignament= req.body.idAssignament;
    data.treatment= req.body.treatment;
    data.pathology= req.body.pathology;
    const updateData = await data.save();
    if (updateData) {
      return res
        .status(200)
        .send({ message: "History Updated", data: updateData });
    }
  }
  return res.status(500).send({ message: " Error in Updating History." });
});

router.patch("/:idHistory", async (req, res) => {
  try {
    const updated = await History.updateOne(
      { idHistory: req.params.idHistory },
      {
        $set: {
            idAssignament: req.body.idAssignament,
            treatment: req.body.treatment,
            pathology: req.body.pathology
        },
      }
    );
    res.json(updated);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
