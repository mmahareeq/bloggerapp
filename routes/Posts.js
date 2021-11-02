const router = require('express').Router();
const User = require('../models/User')
const Post = require('../models/Post')


//Create Post
router.post('/',async(req,res)=>{
    const newPost = new Post(req.body);
    try{
         const savePost = await newPost.save();
         res.status(200).json(savePost)
    }catch(err){
       res.status(500).json(err)
    }

})
//updata post 
router.post('/:id',async(req,res)=>{
   try{
       const post =await Post.findById(req.params.id);
       if(post.username === req.body.username){
            try{
              const updataPost = await Post.findByIdAndUpdate(req.params.id,{
                  $set:req.body,
              },{new:true});
              res.status(200).json("updataPost")
            }catch(err){
               re.status(500).json(err)
            }
       }else{
           res.status(401).json("you can updata only your post  ")
       }
   }catch(err){
       res.status(500).json(err)
   } 
    
})

//DELETE
router.delete('/:id',async(req,res)=>{

    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username){
             try{
               await post.delete()
               res.status(200).json("Post has been deleted ...")
             }catch(err){
                re.status(500).json(err)
             }
        }else{
            res.status(401).json("you can delete only your post  ")
        }
    }catch(err){
        res.status(500).json(err)
    } 
  
})
// GET post
router.get("/:id",async (req,res)=>
{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
})


// Get All post
router.get("/",async (req,res)=>
{   const username = req.query.user;
    const catName = req.query.cat
    try{
        let posts ;
        if(username) 
        {
            posts = await Post.find({username:username})
        }else if(catName){
            posts = await Post.fint({categories:{
                $in:[catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router