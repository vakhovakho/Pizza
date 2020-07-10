import React from 'react';
import styles from './Pizza.module.css';

const Pizza = (props: any) => {
    return (
        <div className={ styles.Pizza }> 
            <img src={ props.image } alt="pizza pic" />
            <div className={ styles.ProductName }>
                <p>სახელი</p>
            </div>
            <div className={ styles.ProductDescription }>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={ styles.ProductSizes }>
                <div className={ styles.FirstSize}>
                    <p>25 sm</p>
                </div>
                <div className={ styles.FirstSize}>
                    <p>25 sm</p>
                </div>
                <div className={ styles.FirstSize}>
                    <p>25 sm</p>
                </div>
            </div>
            <div className={ styles.ProductFooter }>
                <div className={ styles.ProductPrice }>
                    <p>100 $</p>
                </div>
                <div className={ styles.GetInBag }>
                    <img src="/images/icons/shoppingbag-icon.png" alt="shopping bag icon"></img>
                </div>
            </div>
        </div>
        );
}

export default Pizza;