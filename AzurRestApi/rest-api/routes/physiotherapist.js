const express = require('express');
const { remove } = require('../models/Physiotherapist');
const router = express.Router();

const Physiotherapist = require('../models/Physiotherapist')


router.get('/', async (req, res)=>{
    try{
        const data = await Physiotherapist.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:err})
    }
});

router.get('/:ci', async (req, res) => {
    try{
        const data = await Physiotherapist.findOne({"ci": req.params.ci});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const data = new Physiotherapist({
        speciality: req.body.speciality,
        ci: req.body.ci,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        cellphone: req.body.cellphone,
        email: req.body.email,
        password: req.body.password, 
        admin: req.body.admin
    });
    try{
        const savedPost = await data.save();
        res.status(200).json(savedPost);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

// Delete
router.delete('/:ci', async(req, res)=>{
    try{
        const removePhysiotherapist = await Physiotherapist.remove({id: req.params.ci});
        res.json(removePhysiotherapist);
    } catch(err){
        res.json({message: err});
    }
});

//Update a post
router.patch('/:ci', async(req, res)=>{
    try{
        const updatedPost = await Physiotherapist.updateOne(
            {ci: req.params.ci},
            {$set: {speciality: req.body.speciality,
                name: req.body.name,
                age: req.body.age,
                address: req.body.address,
                cellphone: req.body.cellphone,
                email: req.body.email,
                password: req.body.password, 
                admin: req.body.admin}
            }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;