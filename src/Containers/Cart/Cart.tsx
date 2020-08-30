import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import CartItems from '../../Components/CartItems/CartItems';
import CartOrderDetails from '../../Components/CartOrderDetails/CartOrderDetails';
import Button from '../../Components/UI/Form/Button/Button';

import styles from './Cart.module.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartData } from '../../redux/cart/selectors';
import { getUserData } from '../../redux/user/selectors';
import { updateContactDetails } from '../../redux/user/actions';

import ContactDetails from '../../Core/Contracts/ContactDetails';
import CartContract from '../../Core/Contracts/Cart';
import IStore from '../../redux/Contracts/IStore';

import axios from '../../axios-instance';
import { LocalStorageKey } from '../../redux/enums/LocalStorageKey';

interface IState {
    orderConfirmed: boolean,
    orderPlaced: boolean
};

interface IProps {
    cart: CartContract
    contactDetails: ContactDetails,
    updateContactDetails: Function
}

class Cart extends Component<IProps> {
    state: IState = {
        orderConfirmed: false,
        orderPlaced: false
    };

    componentDidUpdate() {
        if(this.state.orderPlaced) {
            window.scrollTo(0, 0);
        }
    }

    placeOrder = () => {
        axios.post('/orders/create', {
            ...this.props.contactDetails
        }).then(response => {
            localStorage.removeItem(LocalStorageKey.CART_HASH);
            const contactDetails: ContactDetails = {...this.props.contactDetails, comment: ""};
            this.props.updateContactDetails(contactDetails);
            this.setState({orderPlaced: true, orderConfirmed: false});
        });
    }

    confirmClickHandler = () => {
        if(this.state.orderConfirmed) {
            return;
        }

        this.setState({orderConfirmed: true});
    }

   
    backToCartHandler = () => {
        this.setState({orderConfirmed: false});
    }

    inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const contactDetails = {...this.props.contactDetails};
        const name = event.target.name as keyof ContactDetails;

        if(name in contactDetails) {
            contactDetails[name] = event.target.value;

            this.props.updateContactDetails(contactDetails);
        }
        
    }

    render() {
        let cartItems = (
            <div className={ styles.EmptyCart }>
                <h3>{this.state.orderPlaced ? "Your order is Placed" : "Cart Is Empty"}</h3>
                <Link to={ this.state.orderPlaced ? "/my-orders" : "/"}>
                    <Button>{this.state.orderPlaced ? "Go to My Orders" :"Back To Home"}</Button>
                </Link>
                
            </div>
        );
        
        if(this.props.cart.items.length && !this.state.orderPlaced) {
            cartItems = (
                <CartItems 
                    items={ this.props.cart.items }
                    orderConfirmed={ this.state.orderConfirmed }
                    total = { this.props.cart.total }
                    confirmClick = { this.confirmClickHandler }
                />
            );
        }

        return (
            <div className={ styles.Cart }>
                <div className={ styles.CartBody }>
                    { cartItems }
                    <CartOrderDetails 
                        total={ this.props.cart.total } 
                        orderConfirmed={ this.state.orderConfirmed } 
                        orderPlaced={ this.state.orderPlaced } 
                        backToCartClicked={ this.backToCartHandler }
                        inputChanged={ this.inputChangeHandler }
                        contactDetails={ this.props.contactDetails }
                        placeOrderClicked={ this.placeOrder }
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state: IStore) {
    const cart = getCartData(state as IStore);
    const contactDetails = getUserData(state as IStore).contactDetails
    return { cart, contactDetails }
  }

export default connect( mapStateToProps, {updateContactDetails} )(Cart)