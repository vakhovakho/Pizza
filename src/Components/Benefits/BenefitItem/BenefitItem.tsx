import React from 'react';
import styles from './BenefitItem.module.css';

const BenefitItem = ( props: any) => {
    return (
        <div className={ styles.BenefitItem}>
            <div className={ styles.BenefitIcons}>
                <img src={ props.image } alt="rocket icon"></img>
                <img src="/images/icons/wave-icon.png" alt="wave icon"></img>
            </div>
            <div className={ styles.BenefitsOffer}>
                <p> { props.title } </p>
                <p> { props.description} </p>
            </div>
        </div>
    );
}

export default BenefitItem;