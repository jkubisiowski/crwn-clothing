import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, cartItem: { name, imageUrl, price, quantity }, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
