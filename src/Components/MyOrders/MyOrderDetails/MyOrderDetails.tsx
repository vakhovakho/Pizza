import React from 'react';
import styles from './MyOrderDetails.module.css';
import Track from '../../UI/Track/Track';

const MyOrderDetails = ( props: any) => {
    return (
            <div className={ styles.OrderDetails }>
                <div className={ styles.OrderTime }>
                    <p>#0001</p>
                    <p>7/15/20</p>
                </div>
                <div className={ styles.OrderPizzas }>
                    <ul>
                        <li>
                            <p>Pizza "Peperoni" size: 25sm <span>(1*100$)</span></p>
                        </li>
                        <li>
                            <p>Pizza "Four chease" size: 35sm <span>(2*100$)</span></p>
                        </li>
                        <li>
                            <p>Pizza "Devila" size: 45sm <span>(3*100$)</span></p>
                        </li>
                        <li>
                            <p>Pizza "Margarita" size: 35sm <span>(4*100$)</span></p>
                        </li>
                    </ul>
                </div>
                <div className={ styles.OrderPrice }>
                    <p>Price of order</p>
                    <p>1000$</p>
                </div>
                <Track/>
            </div>
    );
}

export default MyOrderDetails;