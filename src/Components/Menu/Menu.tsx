import React from 'react';
import Pizza from './Pizza/Pizza';
import Product from '../../Core/Contracts/Product';
import styles from './Menu.module.css';


const Menu = (props: {products: Array<Product>, addToCart: Function, selectSize: Function}) => {
    const products = props.products.map( prod => {
        return <Pizza 
            product={ prod } 
            key={ prod.id } 
            addToCartClicked={ props.addToCart }
            sizeSelected = {props.selectSize }
        />
    });
    
    return (
    <div className={ styles.Menu }> 
        { products }
    </div>);
}

export default Menu;