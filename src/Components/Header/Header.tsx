import React from 'react';
import styles from './Header.module.css';
import CartHeader from '../../Core/Contracts/CartHeader';
import { Link } from 'react-router-dom';

const Header = (props: {cart: CartHeader, registerClicked: Function,  loginClicked: Function}) => {
    return (
        <div className={ styles.Header }>
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
                        <button onClick={() => props.registerClicked()}>Registration</button>
                        <button onClick={() => props.loginClicked()}>Allready have an account</button>
                    </div>
                </div>
                <div className={ styles.Cart}>
                    <div className={ styles.CartIcon }>
                        <img src="/images/icons/cart.png" alt="shopping bag icon"></img>
                    </div>
                    <div className={ styles.CartCounter }>
                        <p>{ props.cart.total }$</p>
                        <Link to="/cart" className={ styles.goToCart }>In the cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;