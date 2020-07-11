import React from 'react';
import BenefitItem from './BenefitItem/BenefitItem';
import styles from './Benefits.module.css';

const Benefits = (props: any) => {
    return (
        <div className={ styles.Benefits }>
            <BenefitItem
                image='/images/icons/rocket-icon.png'
                alt="rocket icon"
                title="Free delivery"
                description="Call outside the city for $ 15"/>
            <BenefitItem
                image='/images/icons/credit-card.png' 
                alt="credit card"
                title="Cnvenient payment"
                description="Paying for an order with a courier or online"/>
            <BenefitItem
                image='/images/icons/pizza-slice.png' 
                alt="pizza slice"
                title="Delicious recipes"
                description="A combination of English and European cuisine"/>
            <BenefitItem
                image='/images/icons/chef-hat.png' 
                alt="chef hat"
                title="Experience chif"
                description="Masters with international experience"/>
        </div>
    );
}

export default Benefits;