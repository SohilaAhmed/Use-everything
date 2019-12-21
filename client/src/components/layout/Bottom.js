import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import{ connect} from 'react-redux';
import PropTypes from 'prop-types';

const bottom= ({auth:{isAuthenticated, loading}})=>{
  const authLinks =(
   < ul>
   
 
   <li>
        <Link to='/dashboard'>
        <i className='fas fa-user'></i>{' '}
        <span className='hide-sm'>
            Dashboard </span></Link></li>
   
  </ul>
  );
  const guestLinks=(
    <ul>
   
      <li>
        <Link to='about as'>About Us</Link></li>
    <li>
        <Link to='Copy right'>Copy right</Link></li>
        
  </ul>
  );
    return(
        <nav className="bottom bg-dark">
        
        {  !loading&& (<Fragment>{isAuthenticated ?  authLinks  :guestLinks}</Fragment>)}
      </nav>
    );
};

bottom.propTypes = {
    
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state =>({
    auth: state.auth
});
export default connect( mapStateToProps) (bottom);