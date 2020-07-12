import React from 'react';
import CartItem from './CartItem/CartItem';
import CartSummary from './CartSummary/CartSummary';
import styles from './CartItems.module.css';

const CartItems = (props: any) => {
    return (
        <div className={ styles.CartItems }>
            <form>
                <CartItem 
                image='/images/photos/pizza-1.jpg' 
                title="peperoni"
                description="35sm"/>
                <CartItem 
                image='/images/photos/pizza-2.jpg' 
                title="margarita"
                description="35sm"/>
                <CartItem 
                image='/images/photos/pizza-3.jpg' 
                title="Four cheese"
                description="35sm"/>
                <CartItem 
                image='/images/photos/pizza-4.jpg' 
                title="devila"
                description="35sm"/>
                <CartSummary />
            </form>
        </div>
    );
}

export default CartItems;