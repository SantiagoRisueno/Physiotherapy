const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog')

router.get('/', async (req, res)=>{
    const data = await Blog.find({});
    res.send(data);
});

router.get('/:idBlog', async (req, res) => {
    const data = await Blog.findOne({
        idBlog: req.params.idBlog,
    });
    if(data){
        res.send(data);
    }else{
        res.status(400).send("Blog Not Found");
    }
})

router.post('/', async (req, res) => {
    const data = new Blog({
        idBlog: req.body.idBlog,
        author: req.body.author,
        date: req.body.date,
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        categories: req.body.categories
    });
    const dataFound = await Blog.findOne({
        idBlog: req.body.idBlog,
    });
    if(dataFound){
        res.status(404).send({message: "Blog already exists.", data: dataFound});
    }else{
      const savedData = await data.save();
      res.status(201).send({ message: "New Blog Created", data: savedData });
    }
});

// Delete
router.delete('/:idBlog', async(req, res)=>{
    const data = await Blog.findOne({
        idBlog: req.params.idBlog,
    });
    if(data){
        const removeData = await data.remove();
        res.send(removeData);
    } else {
        res.status(404).send("Blog not Found.");
    }
});

//Update
router.put('/:idBlog', async(req, res)=>{
    const data = await Blog.findOne({
        idBlog: req.params.idBlog,
    });
    if(data){
        author = req.body.author;
        date = req.body.date;
        title = req.body.title;
        description = req.body.description;
        img = req.body.img;
        categories = req.body.categories;
        const updateData = await data.save();
        if (updateData) {
        return res
            .status(200)
            .send({ message: "Blog Updated", data: updateData });
        }
    }
    return res.status(500).send({ message: " Error in Updating Blog." });
});

router.patch('/:idBlog', async(req, res)=>{
    try{
        const updatedPost = await Blog.updateOne(
            {idBlog: req.params.idBlog},
            {$set: {date: req.body.date,
                author: req.body.author,
                title: req.body.title,
                description: req.body.description,
                img: req.body.img,
                categories: req.body.categories}
            }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

// N blog por caterogies
// http://localhost:3000/blog/categories/Respiratoria
router.get('/categories/:categories', async (req, res) => {
    try{
        const data = await Blog.count({categories: req.params.categories});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})





module.exports = router;