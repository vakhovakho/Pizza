import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CartItems from '../../Components/CartItems/CartItems';
import CartOrderDetails from '../../Components/CartOrderDetails/CartOrderDetails';
import Product from '../../Core/Contracts/Product';
import CartHeader from '../../Core/Contracts/CartHeader';

import styles from './Cart.module.css';

interface IState {
    products: Array<Product>, 
    cartHeader: CartHeader,
    orderConfirmed: boolean
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
        orderConfirmed: false   
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

    confirmClickHandler = () => {
        if(this.state.orderConfirmed) {
            return;
        }

        this.setState({orderConfirmed: true});
    }

    render() {
        return (
            <div className={ styles.Cart }>
                <Header cart={ this.state.cartHeader }/>
                <div className={ styles.CartBody }>
                    <CartItems 
                        products={ this.state.products }
                        orderConfirmed={ this.state.orderConfirmed }
                        changeCount={ this.changeCountHandler }
                        total = { this.state.cartHeader.total }
                        confirmClick = { this.confirmClickHandler }
                    />
                    <CartOrderDetails total={ this.state.cartHeader.total } show={ this.state.orderConfirmed } />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart;