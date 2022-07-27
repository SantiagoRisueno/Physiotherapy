const express = require("express");
const { remove } = require("../models/Users");
const router = express.Router();

const Users = require("../models/Users");

router.get("/", async (req, res) => {
  try {
    const data = await Users.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:ci", async (req, res) => {
  try {
    const data = await Users.findOne({ ci: req.params.ci });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const data = new Users({
    ci: req.body.ci,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    cellphone: req.body.cellphone,
    email: req.body.email,
    password: req.body.password,
    pathology: req.body.pathology,
    treatingPhysician: req.body.treatingPhysician,
    background: req.body.background,
    admin: req.body.admin,
  });
  try {
    const savedPost = await data.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete
router.delete("/:ci", async (req, res) => {
  try {
    const removeUsers = await Users.remove({ id: req.params.ci });
    res.json(removeUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch("/:ci", async (req, res) => {
  try {
    const updatedPost = await Users.updateOne(
      { ci: req.params.ci },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          address: req.body.address,
          cellphone: req.body.cellphone,
          email: req.body.email,
          password: req.body.password,
          pathology: req.body.pathology,
          treatingPhysician: req.body.treatingPhysician,
          background: req.body.background,
          admin: req.body.admin,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
