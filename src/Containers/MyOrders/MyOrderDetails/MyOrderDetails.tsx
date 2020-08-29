import React from 'react';
import styles from './MyOrderDetails.module.css';
import Track from '../../../Components/UI/Track/Track';
import Order from '../../../Core/Contracts/Order';

const MyOrderDetails = ( props: {order: Order}) => {
    let products: any[] = [];
    
    if(props.order.products.length) {
        products = props.order.products.map( (prod, index) => {
            return (<li key={index}>
                    <p>{ prod.name } size: { prod.size } <span>({ prod.amount }*{ prod.price }$)</span></p>
                </li>);
        });
    }
    return (
            <div className={ styles.OrderDetails }>
                <div className={ styles.OrderTime }>
                    <p>#{ props.order.id }</p>
                    <p>{ props.order.date }</p>
                </div>
                <div className={ styles.OrderPizzas }>
                    <div className={ styles.OrderTimeMobile }>
                        <p>{ props.order.id }</p>
                        <p>{ props.order.date }</p>
                    </div>
                    <ul>
                        { products }
                    </ul>
                    <div className={ styles.OrderPriceMobile }>
                        <p>Price of order</p>
                        <p>{ props.order.total }</p>
                    </div>
                </div>
                <div className={ styles.OrderPrice }>
                    <p>Price of order</p>
                    <p>{ props.order.total }</p>
                </div>
                <Track/>
            </div>
    );
}

export default MyOrderDetails;