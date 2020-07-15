import React from 'react';
import styles from './CartItem.module.css';
import Product from '../../../Core/Contracts/Product';

const CartItem = (props: {product: Product, changeCountClicked: Function, orderConfirmed: boolean, deleteClicked: Function}) => {
    return (
        <div className={ styles.CartItem }>
            <div className={ styles.CartItemLeft}>
                <div className={ styles.PizzaInfo }>
                    <img src={ props.product.image } 
                    alt="pizza"/>
                </div>
                <div className={ styles.PizzaName}>
                    <p> { props.product.title } </p>
                    <p> { props.product.selectedSize} </p>
                </div>
            </div>
            <div className={ styles.CartItemCenter}>
                <div className={ styles.PizzaQuantity }>
                    <button 
                        type="button" 
                        onClick={ () => props.changeCountClicked(props.product.id, false) }
                        className={ props.orderConfirmed ? styles.Disabled : '' }
                    >-</button>
                    <input type="text"  value={ props.product.count } disabled required/>
                    <button 
                        type="button" 
                        onClick={ () => props.changeCountClicked(props.product.id, true) }
                        className={ props.orderConfirmed ? styles.Disabled : '' }
                    >+</button>
                </div>
            </div>
            <div className={ styles.CartItemRight}>
                <div className={ styles.PizzaPrice }>
                    <p>{ (props.product.count ?? 1) * props.product.prices[props.product.selectedSize] }$</p>
                    <button 
                        className={ props.orderConfirmed ? styles.Disabled : '' }  
                        onClick={ () => props.deleteClicked(props.product.id, props.product.selectedSize, props.product.prices[props.product.selectedSize]) }
                        type="button">X
                    </button>
                </div>
            </div>
        </div>
    );
}


export default CartItem;