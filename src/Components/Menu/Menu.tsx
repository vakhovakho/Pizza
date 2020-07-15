import React from 'react';
import Pizza from './Pizza/Pizza';
import Product from '../../Core/Contracts/Product';
import styles from './Menu.module.css';


const Menu = (props: {products: Array<Product>, addToCart: Function, selectSize: Function, addingToCart: number}) => {
    const products = props.products.map( prod => {
        return <Pizza 
            product={ prod } 
            key={ prod.id } 
            addToCartClicked={ props.addToCart }
            sizeSelected = {props.selectSize }
            addingToCart = { props.addingToCart === prod.id }
        />
    });
    
    return (
    <div className={ styles.Menu }> 
        { products }
    </div>);
}

export default Menu;