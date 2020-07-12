import React from 'react';
import styles from './CartItem.module.css';

const CartItem = (props: any) => {
    return (
        <div className={ styles.CartItem }>
            <div className={ styles.CartItemLeft}>
                <div className={ styles.PizzaInfo }>
                    <img src={ props.image } 
                    alt="pizza"/>
                </div>
                <div className={ styles.PizzaName}>
                    <p> { props.title } </p>
                    <p> { props.description} </p>
                </div>
            </div>
            <div className={ styles.CartItemCenter}>
                <div className={ styles.PizzaQuantity }>
                    <button type="button">-</button>
                    <input type="text" id="Quantity" name="Quantity" required/>
                    <button type="button">+</button>
                </div>
            </div>
            <div className={ styles.CartItemRight}>
                <div className={ styles.PizzaPrice }>
                    <p>100$</p>
                    <button type="button">X</button>
                </div>
            </div>
        </div>
    );
}


export default CartItem;