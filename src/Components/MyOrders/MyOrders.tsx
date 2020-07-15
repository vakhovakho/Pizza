import React from 'react';
import styles from './MyOrders.module.css';
import MyOrderDetails from './MyOrderDetails/MyOrderDetails';

const MyOrders = ( props: any) => {
    return (
        <div className={ styles.MyOrders }>
            <div className={ styles.MyOrderHead }>
                <div className={ styles.OrderTitle }>
                    <h2>My order</h2>
                </div>
                <div className={ styles.OrderButtons }>
                    <button className={ styles.Active }>Current</button>
                    <button>Delivered</button>
                </div>
            </div>
            <div className={ styles.MyOrderDetailsList }>
                <MyOrderDetails/>
                <MyOrderDetails/>
                <MyOrderDetails/>
            </div>
        </div>
    );
}

export default MyOrders;