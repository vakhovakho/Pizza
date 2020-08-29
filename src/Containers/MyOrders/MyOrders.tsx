import React, { Component } from 'react';
import styles from './MyOrders.module.css';
import MyOrderDetails from './MyOrderDetails/MyOrderDetails';
import axios from '../../axios-instance';
import Order from '../../Core/Contracts/Order';

class MyOrders extends Component {
    state: {orders: Array<Order>} = {
        orders: []
    }

    componentDidMount() {
        requestAnimationFrame(() => {
            axios.get('/orders')
            .then(response => {
                this.setState({orders: [...response.data] })
            });
        });
    }

    render() {
        let orders: Array<any> = [];

        if(this.state.orders.length) {
            orders = this.state.orders.map(myOrder => {
                return <MyOrderDetails key={myOrder.id} order={ myOrder } />
            });
        }
        
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
                    { orders }
                </div>
            </div>
        );
    }
}

export default MyOrders;