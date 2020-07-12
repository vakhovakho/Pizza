import React from 'react';
import styles from './CartSummary.module.css';

const CartSummary = (props: any) => {
    return (
        <div className={ styles.CartSummary }>
            <div className={ styles.OrderPrice}>
                <p>Order price</p>
                <p>100$</p>
            </div>
            <div className={ styles.OrderCheckOut }>
            <button type="button">Checkout</button>
            </div>
        </div>
    );
}

export default CartSummary;