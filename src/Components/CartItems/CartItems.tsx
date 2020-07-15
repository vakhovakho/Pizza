import React from 'react';
import CartItem from './CartItem/CartItem';
import CartSummary from './CartSummary/CartSummary';
import styles from './CartItems.module.css';
import Product from '../../Core/Contracts/Product';

interface IProps {
    products: Array<Product>, 
    changeCount: Function, 
    total: number, 
    confirmClick: Function, 
    orderConfirmed: boolean
};

const CartItems = (props: IProps) => {
    const products = props.products.map( product => {
        return <CartItem 
                product={ product } 
                key={ product.id } 
                changeCountClicked={ props.changeCount }
                orderConfirmed={ props.orderConfirmed }
            />
    });

    return (
        <div className={ styles.CartItems }>
            <form>
               { products }
               <CartSummary total={ props.total } confirmClicked={ props.confirmClick } orderConfirmed={ props.orderConfirmed } />
            </form>
        </div>
    );
}

export default CartItems;