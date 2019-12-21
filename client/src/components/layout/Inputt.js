import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';


const Inputt=(props
) =>{
  const {auth,text,name, avatar} = props;
//   console.log(comments);
  
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
               </div>
         
        </div>
        
    
)}
Inputt.propTypes = {
   isAuthenticated:PropTypes.bool

}
const mapStateToProps= state=>({
     
    isAuthenticated:state.auth.isAuthenticated,
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
  });
  // export default connect(mapStateToProps,{})(Input);
  export default Inputt;