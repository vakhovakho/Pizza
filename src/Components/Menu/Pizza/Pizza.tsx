import React, { useState } from 'react';
import styles from './Pizza.module.css';
import Product from '../../../Core/Contracts/Product';
import { connect } from 'react-redux';
import { addProduct } from '../../../redux/cart/actions'; 

const Pizza = (props: {product: Product, sizeSelected: Function, addProduct?: Function}) => {
    const [addingToCart, setAddingToCart] = useState(false);
    
    const addToCart = (product: Product) => {
        if(props.addProduct !== undefined) {
            props.addProduct(product);
        }
       
        setAddingToCart(true);

        setTimeout( () => {
            setAddingToCart(false);
        }, 1000);
    }

    return (
        <div className={ styles.Pizza }> 
            <img src={ props.product.image } alt="pizza pic" />
            <div className={ styles.ProductName }>
                <p>{ props.product.title }</p>
            </div>
            <div className={ styles.ProductDescription }>
                <p>{ props.product.description }</p>
            </div>
            <div className={ styles.ProductSizes }>
                <div 
                    className={ [styles.Size, props.product.selectedSize === "small" ? styles.Selected : ''].join(' ') } 
                    onClick={ () => props.sizeSelected(props.product.id, 'small') }>
                    <p>25 sm</p>
                </div>
                <div 
                    className={ [styles.Size, props.product.selectedSize === "medium" ? styles.Selected : ''].join(' ') } 
                    onClick={ () => props.sizeSelected(props.product.id, 'medium') }>
                    <p>35 sm</p>
                </div>
                <div 
                    className={ [styles.Size, props.product.selectedSize === "large" ? styles.Selected : ''].join(' ') } 
                    onClick={ () => props.sizeSelected(props.product.id, 'large') }>
                    <p>45 sm</p>
                </div>
            </div>
            <div className={ styles.ProductFooter }>
                <div className={ styles.ProductPrice }>
                    <p>{ props.product.prices[props.product.selectedSize] }$</p>
                </div>
                <div className={ styles.GetInBag } onClick={ () => addToCart(props.product) }>
                    <span className={ addingToCart ? '' : styles.Hidden }>added</span>
                    <img src="/images/icons/cart.png" alt="shopping bag icon"></img>
                </div>
            </div>
        </div>
        );
}

export default connect( null, { addProduct })(Pizza)