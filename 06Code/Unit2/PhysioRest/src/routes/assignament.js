const express = require("express");

const router = express.Router();
const Assignament = require("../models/Assignament");

router.get("/", async (req, res) => {
  const data = await Assignament.find({});
  res.send(data);
});

router.get("/:idAppointment", async (req, res) => {
  const data = await Assignament.findOne({
    idAppointment: req.params.idAppointment,
  });
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("Appointment Not Found.");
  }
});

router.post("/", async (req, res) => {
  const data = new Assignament({
    idAppointment: req.body.idAppointment,
    date: req.body.date,
    time: req.body.time,
    pathology: req.body.time,
    customer: req.body.customer,
    physiotherapist: req.body.physiotherapist,
  });
  const dataFound = await Assignament.findOne({
    idAppointment: req.body.idAppointment,
  });
  if (dataFound){
    res.status(404).send({message: "Assignament already exists.", data: dataFound});
  }else{
    const savedData = await data.save();
    res.status(201).send({ message: "New Assignament Created", data: savedData });
  }
});

// Delete
router.delete("/:idAppointment", async (req, res) => {
  const data = await Assignament.findOne({
    idAppointment: req.params.idAppointment
  });
  if (data) {
    const removeData = await data.remove();
    res.send(removeData);
  } else {
    res.status(404).send("Assignament not Found.");
  }
});

//Update
router.put("/:idAppointment", async (req, res) => {
  const data = await Assignament.findOne({ idAppointment: req.params.idAppointment });
  if (data) {
    data.date = req.body.date;
    data.time = req.body.time;
    data.pathology = req.body.pathology;
    data.customer = req.body.customer;
    data.physiotherapist = req.body.physiotherapist;
    const updateData = await data.save();
    if (updateData) {
      return res
        .status(200)
        .send({ message: "Assignament Updated", data: updateData });
    }
  }
  return res.status(500).send({ message: " Error in Updating Assignament." });
});

router.patch("/:idAppointment", async (req, res) => {
  try {
    const updatedPost = await Assignament.updateOne(
      { idAppointment: req.params.idAppointment },
      {
        $set: {
          date: req.body.date,
          customer: req.body.customer,
          physiotherapist: req.body.physiotherapist,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//N citas por customer
router.get("/customer/:customer", async (req, res) => {
  try {
    const data = await Assignament.count({ customer: req.params.customer });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//N citas por physiotherapist
router.get("/physiotherapist/:physiotherapist", async (req, res) => {
  try {
    const data = await Assignament.count({
      physiotherapist: req.params.physiotherapist,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
