import React from 'react';
import styles from './CartItem.module.css';
import { CartItem as CartItemContract } from '../../../Core/Contracts/Cart';
import { connect } from 'react-redux';
import { addProduct, removeProduct, substractProduct } from '../../../redux/cart/actions';

interface IProps {
    item: CartItemContract, 
    orderConfirmed: boolean,
    addProduct: Function,
    removeProduct: Function,
    substractProduct: Function
}

const CartItem = (props: IProps) => {
    const countFinalPrice = () => {
        const amount = props.item.amount;
        const selectedSize = props.item.selectedSize;
        const prices = props.item.product.prices;
        return Math.floor(amount * prices[selectedSize] * 100) / 100;
    }
    return (
        <div className={ styles.CartItem }>
            <div className={ styles.CartItemLeft}>
                <div className={ styles.PizzaInfo }>
                    <img src={ props.item.product.image } 
                    alt="pizza"/>
                </div>
                <div className={ styles.PizzaName}>
                    <p> { props.item.product.name } </p>
                    <p> { props.item.selectedSize} </p>
                </div>
            </div>
            <div className={ styles.CartItemQuantityWrapper}>
                <div className={ styles.CartItemCenter}>
                    <div className={ styles.PizzaQuantity }>
                        <button 
                            type="button" 
                            onClick={ () => props.substractProduct(props.item) }
                            className={ props.orderConfirmed ? styles.Disabled : '' }
                        >-</button>
                        <input type="text"  value={ props.item.amount } disabled required/>
                        <button 
                            type="button" 
                            onClick={ () => props.addProduct(null, props.item) }
                            className={ props.orderConfirmed ? styles.Disabled : '' }
                        >+</button>
                    </div>
                </div>
                <div className={ styles.CartItemRight}>
                    <div className={ styles.PizzaPrice }>
                        <p>{ countFinalPrice() }$</p>
                        <button 
                            className={ props.orderConfirmed ? styles.Disabled : '' }  
                            onClick={ () => props.removeProduct(props.item) }
                            type="button">X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect( null, { addProduct, substractProduct, removeProduct })(CartItem);