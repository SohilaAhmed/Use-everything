const express = require ('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const post= require('../../models/post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  post api/posts
//@desc   create a post
//@access private
router.post(
    '/',
    
      [auth,
      [
        check('text', 'Text is required')
          .not()
          .isEmpty()
      ]
    ]
    ,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.user.id).select('-password');
  
        const nepost = new post({
          text: req.body.text,
          name: user.name,
          avatar: user.avatar
        });
  
        const post = await newpost.save();
  
        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
module.exports=router;
