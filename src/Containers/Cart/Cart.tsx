import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CartItems from '../../Components/CartItems/CartItems';
import CartOrderDetails from '../../Components/CartOrderDetails/CartOrderDetails';
import Product from '../../Core/Contracts/Product';
import CartHeader from '../../Core/Contracts/CartHeader';

import styles from './Cart.module.css';
import Modal from '../../Components/UI/Modal/Modal';
import Register from '../../Components/Register/Register';
import Button from '../../Components/UI/Form/Button/Button';
import { Link } from 'react-router-dom';

interface IState {
    products: Array<Product>, 
    cartHeader: CartHeader,
    orderConfirmed: boolean,
    registerMode: boolean
};

class Cart extends Component {
    state: IState = {
        cartHeader: {
            products: [
                {id: 1, count: 1, size: 'small'},
                {id: 2, count: 1, size: 'medium'},
                {id: 3, count: 1, size: 'large'},
            ],
            total: 60
        },
        products: [
            { 
                id: 1,
                image: '/images/photos/pizza-1.jpg',
                alt: "pizza one",
                title: "name of first pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry11.",
                selectedSize: 'small',
                prices: {small: 10, medium: 20, large: 30},
                count: 1
            },
            { 
                id: 2,
                image: '/images/photos/pizza-2.jpg',
                alt: "pizza two",
                title: "name of second pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry22.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30},
                count: 1
            },
            { 
                id: 3,
                image: '/images/photos/pizza-3.jpg',
                alt: "pizza three",
                title: "name of third pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry33.",
                selectedSize: 'large',
                prices: {small: 10, medium: 20, large: 30},
                count: 1
            }
        ],
        orderConfirmed: false,
        registerMode: false   
    };

    addToCartHandler = (id: number) =>{
        if(this.state.orderConfirmed) {
            return;
        }

        const products = [...this.state.products];
        const index = products.findIndex(p => p.id === id);
        
        if(index === -1) {
            return;
        } 

        let total = this.state.cartHeader.total;
        total +=  products[index].prices[products[index].selectedSize];

        const cartProducts = [...this.state.cartHeader.products];
        const cartProductIndex = cartProducts.findIndex(p => p.id === id && p.size === products[index].selectedSize);

        if(cartProductIndex > -1) {
            cartProducts[cartProductIndex] = {...cartProducts[cartProductIndex], count: cartProducts[cartProductIndex].count + 1};
        } else {
            cartProducts.push({
                id: products[index].id,
                size: products[index].selectedSize,
                count: 1
            });
        }

        const cartHeader = {...this.state.cartHeader};
        cartHeader.products = cartProducts;
        cartHeader.total = total;
        this.setState({cartHeader});
        
    }

    changeCountHandler = (id: number, increase: boolean) => {
        if(this.state.orderConfirmed) {
            return;
        }

        const products = [...this.state.products];
        const index = products.findIndex( prod => prod.id === id);
        if(index > -1) {
            if(increase) {
                products[index].count = (products[index].count ?? 0) + 1;
                this.addToCartHandler(id);
            } else {
                products[index].count = (products[index].count ?? 0) - 1;
            }
            
            this.setState({products});
        }
    }

    deleteHandler = (id: number, size: string, price: number) => {
        console.log("delete handler");
        if(this.state.orderConfirmed) {
            return;
        }

        const products = [...this.state.products].filter( product => product.id !== id );
       
        this.setState({products});

        let cartProducts = [...this.state.cartHeader.products];
        const cartProduct = cartProducts.find(p => p.id === id && p.size === size);

        if(cartProduct === undefined) {
            return;
        }

        let total = this.state.cartHeader.total;
        total -= cartProduct.count * price;

        cartProducts = cartProducts.filter( product => product.id !== id );

        const cartHeader = {...this.state.cartHeader};
        cartHeader.products = cartProducts;
        cartHeader.total = total;

        this.setState({cartHeader});
    }

    confirmClickHandler = () => {
        if(this.state.orderConfirmed) {
            return;
        }

        this.setState({orderConfirmed: true});
    }

    cancelRegisterModeHandler = () => {
        this.setState({registerMode: false});
    }

    startRegistrationMode = () => {
        this.setState({registerMode: true});
    }

    backToCartHandler = () => {
        this.setState({orderConfirmed: false});
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

        if(this.state.cartHeader.total) {
            cartItems = (
                <CartItems 
                    products={ this.state.products }
                    orderConfirmed={ this.state.orderConfirmed }
                    changeCount={ this.changeCountHandler }
                    total = { this.state.cartHeader.total }
                    confirmClick = { this.confirmClickHandler }
                    deleteClick = { this.deleteHandler }
                />
            );
        }

        return (
            <div className={ styles.Cart }>
                <Modal show={ this.state.registerMode } modalClosed={ this.cancelRegisterModeHandler }>
                    <Register />
                </Modal>
                <Header cart={ this.state.cartHeader }  registerClicked={ this.startRegistrationMode } />
                <div className={ styles.CartBody }>
                    { cartItems }
                    <CartOrderDetails 
                        total={ this.state.cartHeader.total } 
                        show={ this.state.orderConfirmed } 
                        backToCartClicked={ this.backToCartHandler }
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart;