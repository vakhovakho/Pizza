import React from 'react';
import styles from './Pizza.module.css';

const Pizza = (props: any) => {
    return (
        <div className={ styles.Pizza }> 
            <img src={ props.image } alt="pizza pic" />
            <div className={ styles.ProductName }>
                <p>{ props.title }</p>
            </div>
            <div className={ styles.ProductDescription }>
                <p>{ props.description }</p>
            </div>
            <div className={ styles.ProductSizes }>
                <div className={ styles.FirstSize}>
                    <p>25 sm</p>
                </div>
                <div className={ styles.FirstSize}>
                    <p>35 sm</p>
                </div>
                <div className={ styles.FirstSize}>
                    <p>45 sm</p>
                </div>
            </div>
            <div className={ styles.ProductFooter }>
                <div className={ styles.ProductPrice }>
                    <p>100 $</p>
                </div>
                <div className={ styles.GetInBag }>
                    <img src="/images/icons/cart.png" alt="shopping bag icon"></img>
                </div>
            </div>
        </div>
        );
}

export default Pizza;