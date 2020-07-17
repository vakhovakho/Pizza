import React, { useState } from 'react';
import styles from './Header.module.css';
import CartHeader from '../../Core/Contracts/CartHeader';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { connect } from "react-redux";
import { getCartData } from "../../redux/cart/selectors";

const Header = (props: any) => {
    const  [registrationMode, setRegisrationMode] = useState(false);
    const  [loginMode, setLoginMode] = useState(false);
    
    return (
        <div className={ styles.Header }>
            <Modal show={ registrationMode } modalClosed={ () => setRegisrationMode(false) }>
                <Register />
            </Modal>
            <Modal show={ loginMode } modalClosed={ () => setLoginMode(false) }>
                <Login />
            </Modal>
            <div className={ styles.HeaderNav }>
                <div className={ styles.Contact }>
                    <div className={ styles.PhoneNumber }>
                        <p>+0 (000) <span>000-000</span></p>
                        <p>From 10:00 till 22:00</p>
                    </div>
                    <div className={ styles.Phone }>
                        <img src="/images/icons/phone.png" alt="Phone icon"></img>
                    </div>
                </div>
                <div className={ styles.Address }>
                    <div className={ styles.Pin }>
                        <img src="/images/icons/layer-1.png" alt="Pin icon"></img>
                    </div>
                    <div className={ styles.Location }>
                        <p>London</p>
                        <p>221B Baker Street </p>
                    </div>
                </div>
                <div className={ styles.NavLogo}>
                    <Link to="/" className={ styles.goToCart }>
                        <img src="/images/icons/pizza-logo.png" alt="Pizza icon"></img>
                    </Link>
                </div>
                <div className={ styles.Orders }>
                    <div className={ styles.Registration }>
                        <button onClick={() => setRegisrationMode(true)}>Registration</button>
                        <button onClick={() => setLoginMode(true)}>Allready have an account</button>
                    </div>
                </div>
                <div className={ styles.Cart}>
                    <div className={ styles.CartIcon }>
                        <img src="/images/icons/cart.png" alt="shopping bag icon"></img>
                    </div>
                    <div className={ styles.CartCounter }>
                        <p>{  props.cart.total  }$</p>
                        <Link to="/cart" className={ styles.goToCart }>In the cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(state => ({ cart: getCartData(state as {cart: CartHeader} ) }))(Header);