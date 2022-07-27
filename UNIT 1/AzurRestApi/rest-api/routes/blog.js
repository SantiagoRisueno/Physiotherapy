const express = require('express');
const { remove } = require('../models/Blog');
const router = express.Router();

const Blog = require('../models/Blog')

router.get('/', async (req, res)=>{
    try{
        const data = await Blog.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:err})
    }
});

router.get('/:idBlog', async (req, res) => {
    try{
        const data = await Blog.findOne({"idBlog": req.params.idBlog});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const data = new Blog({
        idBlog: req.body.idBlog,
        date: req.body.date,
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        caterogies: req.body.caterogies
    });
    try{
        const savedPost = await data.save();
        res.status(200).json(savedPost);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

// Delete
router.delete('/:idBlog', async(req, res)=>{
    try{
        const removeBlog = await Blog.remove({idBlog: req.params.idBlog});
        res.json(removeBlog);
    } catch(err){
        res.json({message: err});
    }
});

//Update a post
router.patch('/:idBlog', async(req, res)=>{
    try{
        const updatedPost = await Blog.updateOne(
            {idBlog: req.params.idBlog},
            {$set: {date: req.body.date,
                author: req.body.author,
                title: req.body.title,
                description: req.body.description,
                img: req.body.img,
                caterogies: req.body.caterogies}
            }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

// N blog por caterogies
router.get('/categories/:caterogies', async (req, res) => {
    try{
        const data = await Blog.count({caterogies: req.params.caterogies});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})





module.exports = router;