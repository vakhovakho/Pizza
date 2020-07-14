import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CartItems from '../../Components/CartItems/CartItems';
import CartOrderDetails from '../../Components/CartOrderDetails/CartOrderDetails';

import styles from './Cart.module.css';


class Cart extends Component {
    render() {
        return (
            <div className={ styles.Cart }>
                {/* <Header cart={ this.state.cart }/> */}
                <CartItems />
                <CartOrderDetails />
                <Footer />
            </div>
        )
    }
}

export default Cart;