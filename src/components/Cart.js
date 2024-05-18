import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../features/cart/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: {totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
