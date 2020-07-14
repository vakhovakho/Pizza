import React from 'react';
import styles from './Header.module.css';
import CartHeader from '../../Core/Contracts/CartHeader';

const Header = (props: {cart: CartHeader}) => {
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
                    <img src="/images/icons/pizza-logo.png" alt="Pizza icon"></img>
                </div>
                <div className={ styles.Orders }>
                    <div className={ styles.Registration }>
                        <a href="/">Registration</a>
                        <a href="/">Allready have an account</a>
                    </div>
                </div>
                <div className={ styles.Cart}>
                    <div className={ styles.CartIcon }>
                        <img src="/images/icons/cart.png" alt="shopping bag icon"></img>
                    </div>
                    <div className={ styles.CartCounter }>
                        <p>{ props.cart.total }$</p>
                        <p>In the cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;