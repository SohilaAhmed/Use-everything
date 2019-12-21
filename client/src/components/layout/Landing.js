import React from 'react'
import {Link,Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
// import ProductForm from '../Products/ProductForm';
// import PostItem from '../posts/PostItem';
// import Posts from '../posts/Posts';
// import PostFrom from '../posts/PostForm';
 import Product from '../Products/Products';
 import ProductItem from '../Products/ProductItem';
import ProductForm from '../Products/ProductForm';
import Input from './Input';
import Inputt from './Inputt';
// import Book from './Book';
// import axios from 'axios';
const Landing= ({isAuthenticated})=>{

  if (isAuthenticated){
     
    return <Redirect to='/dashboard'/>
   }
  //  const post={_id:1, likes:[1,2,3], comments:[4,5,6]};
   return(
<section className="landing">
<div className="dark-overlay">
        <div className="landing-inner">
          <div className="form-group">
          <h3 className="x-large">Use EveryThing</h3>

          {/* <p className="lead">
            when you can download books and have alot of information
          </p> */}

            {/* <input type="text" placeholder="Search" name="search"   /> */}
    
          <input type="text" placeholder="Search" name="text" style={{flex: '50', padding: '10px', width:'500px', color:'#'}} />
           
          <input type="submit" value="Search" style={{flex:'50', padding: '10px', width:'70px'}} />


     {/* < Input _id={1} likes={[1,2,3]} dislikes={[1]}  comments={[4,5,6]} avatar="hh.jpeg" avatar="hh.jpeg"/>
 
          <Input _id={1} likes={[1,4,6,6]} dislikes={[1,3,2]} comments={[4,5,6]} avatar="ha.jpeg" text={'  The finest books of philosophy '}/>  */}
            <Input _id={1} likes={[1, 2, 3]} dislikes={[1]} comments={[5, 6, 8]} text={'Recycling Paper'} avatar={"PAPER.jpg"}  />
            <Input _id={1} likes={[1, 2, 3,7]} dislikes={[1,6]} comments={[5, 6, 8]} text={'Recycling Plastic'} avatar={"maxresdefault.jpg"}/>
            <Input _id={1} likes={[1, 2, 3,7]} dislikes={[1,6]} comments={[5, 6, 8]} text={'Recycling Glass'} avatar={"1f334992ac6061578b2fb8a055b9ff3e.jpg"}/>
            {/* <Input _id={1} likes={[1, 2, 3,7]} dislikes={[1,6]} comments={[5, 6, 8]} text={'Recycling Can'} avatar={"ALU-CANS-cropped-1080x675.jpg"}/> */}

 {/* <Product>
 <ProductForm>
   <ProductItem avatar="ha.jpeg"  /></ProductForm>

 </Product> 
    */}


 </div>
        </div>
      </div>
    </section>

        );
    };
    Landing.propTypes = {
      isAuthenticated:PropTypes.bool
    };

   const mapStateToProps= state=>({
     
      isAuthenticated:state.auth.isAuthenticated,
      
    });
    export default connect(mapStateToProps,{}) (Landing)