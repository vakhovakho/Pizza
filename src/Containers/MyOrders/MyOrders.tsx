import React, { Component } from 'react';
import styles from './MyOrders.module.css';
import MyOrderDetails from './MyOrderDetails/MyOrderDetails';
import axios from '../../axios-instance';
import Order from '../../Core/Contracts/Order';
import { LocalStorageKey } from '../../redux/enums/LocalStorageKey';
import { Link } from 'react-router-dom';
import Button from '../../Components/UI/Form/Button/Button';

interface IProps {
    history: any[]
}

class MyOrders extends Component<IProps> {
    state: {orders: Array<Order>} = {
        orders: []
    }

    componentDidMount() {
        if(localStorage.getItem(LocalStorageKey.ACCESS_TOKEN) === null) {
            return this.props.history.push('/')
        }
        requestAnimationFrame(() => {
            axios.get('/orders')
            .then(response => {
                this.setState({orders: [...response.data] })
            });
        });
    }

    render() {
        let orders: Array<any> = [];
        let orderButtons = (
            <Link to="/">
                <Button>Back To Home</Button>
            </Link>
        );

        if(this.state.orders.length) {
            orders = this.state.orders.map(myOrder => {
                return <MyOrderDetails key={myOrder.id} order={ myOrder } />
            });

            orderButtons = (
                <div className={ styles.OrderButtons }>
                    <button className={ styles.Active }>Current</button>
                    <button>Delivered</button>
                </div>
            )
        }

        return (
            <div className={ styles.MyOrders }>
                <div className={ styles.MyOrderHead }>
                    <div className={ styles.OrderTitle }>
                        <h2>My order</h2>
                    </div>
                    { orderButtons }
                </div>
                <div className={ styles.MyOrderDetailsList }>
                    { orders.length ? orders : <p className={styles.NoOrders}>No Orders available</p> }
                </div>
            </div>
        );
    }
}

export default MyOrders;