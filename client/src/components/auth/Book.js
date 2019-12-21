import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 import { Book } from '../../actions/auth';

const book = ({ book, isAuthenticated }) => {
  const [formData, setFormData] =()=>({
   avatar: '',
    feed: '',
  });

  const { avatar,feed} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.img]: e.target.text });

  const onSubmit = async e => {
    e.preventDefault();
    book(avatar, feed);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>tthbjrb</h1>
      <p className='lead'>
        <i className='fas fa-user' /> thrnb 
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='img'
           placeholder='avatar'
            name='avatar'
            value={avatar}
            onChange={e => onChange(e)}
            
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
          placeholder='feed'
            name='text'
            value={feed}
            onChange={e => onChange(e)}
          
          />
        </div>
      </form>
     
    </Fragment>
  );
};

Book.propTypes = {
  book: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { book }
)(Book);
