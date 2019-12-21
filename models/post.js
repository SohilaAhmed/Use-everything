const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  
  
user:{
  type:String
},
text:{
  type:String,
  required:true
},
avatar:{
  type:String
}, 
likes:[
  {
    user:{
      type:Schema.Types.ObjectId,
      ref:'users'
    }
  }
],
Discussion:[{
  user:{
    type:Schema.Types.ObjectId,
    ref:'users'
  },
  text:{
    type:String,
    required:true
  },
  name:{
    type:String
  },
  avatar:{
    type:String
  }, 
  date:{
    type: Date,
    default:Date.now
  }
}
],
date:{
  type: Date,
  default:Date.now
}


})

module.exports= post=mongoose.model('posts',postSchema)