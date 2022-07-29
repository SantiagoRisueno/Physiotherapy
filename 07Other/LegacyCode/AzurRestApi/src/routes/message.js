const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const Message = require("../models/Message");


router.get("/", async (req, res) => {
  const data = await Message.find({});
  res.send(data);
});

router.get("/:idMessage", async (req, res) => {
  const data = await Message.findOne({
    idMessage: req.params.idMessage,
  });
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("Message Not Found.");
  }
});

router.post("/", async (req, res) => {
  const data = new Message({
    idMessage: req.body.idMessage,
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  const dataFound = await Message.findOne({
    idMessage: req.body.idMessage,
  });
  if (dataFound){
    res.status(404).send({message: "Message already exists.", data: dataFound});
  }else{
    const savedData = await data.save();
    res.status(201).send({ message: "New Message Created", data: savedData });
  }
});

// Delete
router.delete("/:idMessage", async (req, res) => {
  const data = await Message.findOne({
    idMessage: req.params.idMessage
  });
  if (data) {
    const removeData = await data.remove();
    res.send(removeData);
  } else {
    res.status(404).send("Message not Found.");
  }
});

//Update
router.put("/:idMessage", async (req, res) => {
  const data = await Message.findOne({ idMessage: req.params.idMessage });
  if (data) {
    data.name = req.body.name;
    data.email = req.body.email;
    data.subject = req.body.subject;
    data.message = req.body.message;
    const updateData = await data.save();
    if (updateData) {
      return res
        .status(200)
        .send({ message: "Message Updated", data: updateData });
    }
  }
  return res.status(500).send({ message: " Error in Updating Message." });
});

router.patch("/:idMessage", async (req, res) => {
  try {
    const updated = await Message.updateOne(
      { idMessage: req.params.idMessage },
      {
        $set: {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    res.json({ message: err });
  }
});





module.exports = router;
