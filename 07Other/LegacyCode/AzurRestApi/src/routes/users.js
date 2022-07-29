const express = require("express");

const router = express.Router();
const Users = require("../models/Users");

router.get("/", async (req, res) => {
	const data = await Users.find({});
	res.send(data);
});

router.get("/:ci", async (req, res) => {
	const data = await Users.findOne({ ci: req.params.ci });
	if (data) {
		res.send(data);
	} else {
		res.status(404).send("User Not Found.");
	}
});

router.get("/id/:idUsers", async (req, res) => {
	const data = await Users.findOne({ idUsers: req.params.idUsers });
	if (data) {
		res.send(data);
	} else {
		res.status(404).send("User Not Found.");
	}
});



router.post("/", async (req, res) => {
	// const id = await Assignament.count({
	// 	users: req.params.idUsers,
	// });

	const data = new Users({
		idUsers: req.body.idUsers,
		ci: req.body.ci,
		name: req.body.name,
		age: req.body.age,
		genre: req.body.genre,
		city: req.body.city,
		address: req.body.address,
		phone: req.body.phone,
		email: req.body.email,
		password: req.body.password,
		type: req.body.type,
	});
	const dataFound = await Users.findOne({ ci: req.body.ci });
	if (dataFound) {
		res.status(404).send({ message: "User already exists.", data: dataFound });
	} else {
		const savedData = await data.save();
		res.status(201).send({ message: "New user Created", data: savedData });
	}
});

// Delete
router.delete("/:ci", async (req, res) => {
	const data = await Users.findOne({ ci: req.params.ci });
	if (data) {
		const removeData = await data.remove();
		res.send(removeData);
	} else {
		res.status(404).send("User not Found.");
	}
});

//Update
router.put("/:ci", async (req, res) => {
	const data = await Users.findOne({ ci: req.params.ci });
	if (data) {
		data.idUsers= req.body.idUsers;
		data.name= req.body.name;
		data.age= req.body.age;
		data.genre= req.body.genre;
		data.city= req.body.city;
		data.address= req.body.address;
		data.phone= req.body.phone;
		data.email= req.body.email;
		data.password= req.body.password;
		data.type= req.body.type;
		const updateData = await data.save();
		if (updateData) {
			return res
				.status(200)
				.send({ message: "User Updated", data: updateData });
		}
	}
	return res.status(500).send({ message: " Error in Updating User." });
});

router.patch("/:ci", async (req, res) => {
	try {
		const updatedPost = await Users.updateOne(
			{ ci: req.params.ci },
			{
				$set: {
					idUsers: req.body.idUsers,
					name: req.body.name,
					age: req.body.age,
					genre: req.body.genre,
					city: req.body.city,
					address: req.body.address,
					phone: req.body.phone,
					email: req.body.email,
					password: req.body.password,
					type: req.body.type,
				},
			}
		);
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
