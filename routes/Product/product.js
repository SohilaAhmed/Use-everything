const express = require ('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const product = require('../../models/product');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route   POST api/products
// @desc    Create a products
// @access  Private
router.post(
    '/',
    
     
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
       // const user = await User.findById(req.user.id).select('-password');
  
        const newproduct = new product({
          text: req.body.text,
          name: user.name,
        });
  
        const product = await newproduct.save();
  
        res.json(product);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
module.exports=router;
