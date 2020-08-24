import React from 'react';
import CartItem from './CartItem/CartItem';
import CartSummary from './CartSummary/CartSummary';
import styles from './CartItems.module.css';
import { CartItem as CartItemContract } from '../../Core/Contracts/Cart';

interface IProps {
    items: Array<CartItemContract>, 
    total: number, 
    confirmClick: Function, 
    orderConfirmed: boolean
};

const CartItems = (props: IProps) => {
    const products = props.items.map( item => {
        return <CartItem 
                item={ item } 
                key={ item.product.id + item.selectedSize } 
                orderConfirmed={ props.orderConfirmed }
            />
    });

    return (
        <div className={ [styles.CartItems, props.orderConfirmed ? styles.Shrinked : ''].join(" ") }>
            <form>
                <div>
                    { products }
                </div>
                <CartSummary total={ props.total } confirmClicked={ props.confirmClick } orderConfirmed={ props.orderConfirmed } />
            </form>
        </div>
    );
}

export default CartItems;