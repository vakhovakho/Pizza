import React from 'react';
import styles from './CartSummary.module.css';

const CartSummary = (props: {total: number, confirmClicked: Function, orderConfirmed: boolean}) => {
    return (
        <div className={ styles.CartSummary }>
            <div className={ styles.OrderPrice}>
                <p>Order price</p>
                <p>{ props.total }$</p>
            </div>
            <div className={ styles.OrderCheckOut }>
                <button 
                    className={ props.orderConfirmed ? styles.Disabled : '' } 
                    type="button" 
                    onClick={ () => props.confirmClicked() }
                >{ props.orderConfirmed ? 'Confirmed' : 'Confirm' }</button>
            </div>
        </div>
    );
}

export default CartSummary;