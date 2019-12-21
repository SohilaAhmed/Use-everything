import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import { getPosts } from '../../actions/post';

const Products = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'></h1>
      <p className='lead'>
        {/* <i className='fas fa-user' />  */}
      </p>
   
      <div className='posts'>
        {posts.map(post => (
          <ProductItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Products);
