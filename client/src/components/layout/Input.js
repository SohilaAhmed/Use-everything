import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import Book from './Book';
import Inputt from './Inputt';

const Input=(props
) =>{
  const {auth, _id,text,name, avatar,user,likes,dislikes,comments,data} = props;
  console.log(comments);
  
return(
 <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
               // class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
             {text}
             
            </p>
            
             <p class="post-date">
                Posted on <Moment format='YYYY/MM/DD'>{data}</Moment>
            </p>
            <button type="button" class="btn btn-light" >
              <i class="fas fa-thumbs-up"></i> {' '}
              <span>
              {likes && likes.length >0 && <span >{likes.length}</span>}
              </span>
            </button>
            <button type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down"></i>
              <span>
              {dislikes && likes.length >0 && <span >{dislikes.length}</span>}
              </span>
            </button>
            <Link to={`/post/${_id}`} class="btn btn-primary">
              Discussion {comments.length >0 && (
                <span class='comment-count'>{comments.length}</span>
              ) }
              
            </Link>
           
            {auth && !auth.loading && user ===auth.user._id && (
                <button      
                type="button"
                class="btn btn-danger"
                >
                <i class="fas fa-times"></i>
                </button>
                
            )}
            
           
          </div>
   
        </div>
 
 
)}
Input.propTypes = {
   isAuthenticated:PropTypes.bool

}
const mapStateToProps= state=>({
     
    isAuthenticated:state.auth.isAuthenticated,
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
  });
  // export default connect(mapStateToProps,{})(Input);
  export default Input;