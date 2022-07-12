const express = require('express');
const { remove } = require('../models/Assignament');
const router = express.Router();

const Assignament = require('../models/Assignament')

router.get('/', async (req, res)=>{
    try{
        const data = await Assignament.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:err})
    }
});

router.get('/:idAppointment', async (req, res) => {
    try{
        const data = await Assignament.findOne({"idAppointment": req.params.idAppointment});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const data = new Assignament({
        idAppointment: req.body.idAppointment,
        date: req.body.date,
        customer: req.body.customer,
        physiotherapist: req.body.physiotherapist
    });
    try{
        const savedPost = await data.save();
        res.status(200).json(savedPost);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

// Delete
router.delete('/:idAppointment', async(req, res)=>{
    try{
        const removeAssignament = await Assignament.remove({idAppointment: req.params.idAppointment});
        res.json(removeAssignament);
    } catch(err){
        res.json({message: err});
    }
});

//Update a post
router.patch('/:idAppointment', async(req, res)=>{
    try{
        const updatedPost = await Assignament.updateOne(
            {idAppointment: req.params.idAppointment},
            {$set: {date: req.body.date,
                customer: req.body.customer,
                physiotherapist: req.body.physiotherapist}
            }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

//N citas por customer 
router.get('/customer/:customer', async (req, res) => {
    try{
        const data = await Assignament.count({customer: req.params.customer});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//N citas por physiotherapist
router.get('/physiotherapist/:physiotherapist', async (req, res) => {
    try{
        const data = await Assignament.count({physiotherapist: req.params.physiotherapist});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



module.exports = router;