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

import Product from '../../Core/Contracts/Product';
import ContactDetails from '../../Core/Contracts/ContactDetails';
import CartContract from '../../Core/Contracts/Cart';
import IStore from '../../redux/Contracts/IStore';

interface IState {
    orderConfirmed: boolean
};

interface IProps {
    cart: CartContract
    contactDetails: ContactDetails
}

class Cart extends Component<IProps> {
    state: IState = {
        orderConfirmed: false,
    };

    changeCountHandler = (id: number, increase: boolean) => {
      
    }

    deleteHandler = (product: Product) => {
        
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

            this.setState({ contactDetails });
        }
        
    }

    render() {
        let cartItems = (
            <div className={ styles.EmptyCart }>
                <h3>Cart Is Empty</h3>
                <Link to="/">
                    <Button>Back To Home</Button>
                </Link>
                
            </div>
        );
        
        if(this.props.cart.items.length) {
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
                        show={ this.state.orderConfirmed } 
                        backToCartClicked={ this.backToCartHandler }
                        inputChanged={ this.inputChangeHandler }
                        contactDetails={ this.props.contactDetails }
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

export default connect( mapStateToProps)(Cart)