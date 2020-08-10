import React from 'react';
import styles from './CartItem.module.css';
import { CartItem as CartItemContract } from '../../../Core/Contracts/Cart';

const CartItem = (props: {item: CartItemContract, changeCountClicked: Function, orderConfirmed: boolean, deleteClicked: Function}) => {
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
            <div className={ styles.CartItemCenter}>
                <div className={ styles.PizzaQuantity }>
                    <button 
                        type="button" 
                        onClick={ () => props.changeCountClicked(props.item.product.id, false) }
                        className={ props.orderConfirmed ? styles.Disabled : '' }
                    >-</button>
                    <input type="text"  value={ props.item.amount } disabled required/>
                    <button 
                        type="button" 
                        onClick={ () => props.changeCountClicked(props.item.product.id, true) }
                        className={ props.orderConfirmed ? styles.Disabled : '' }
                    >+</button>
                </div>
            </div>
            <div className={ styles.CartItemRight}>
                <div className={ styles.PizzaPrice }>
                    <p>{ countFinalPrice() }$</p>
                    <button 
                        className={ props.orderConfirmed ? styles.Disabled : '' }  
                        onClick={ () => props.deleteClicked(props.item.product) }
                        type="button">X
                    </button>
                </div>
            </div>
        </div>
    );
}


export default CartItem;