import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Menu from '../../Components/Menu/Menu';
import Benefits from '../../Components/Benefits/Benefits';
import Footer from '../../Components/Footer/Footer';
import Product from '../../Core/Contracts/Product';

import styles from './Home.module.css';
import CartHeader from '../../Core/Contracts/CartHeader';
import Modal from '../../Components/UI/Modal/Modal';
import Register from '../../Components/Register/Register';
import Login from '../../Components/Login/Login';
import ContactDetails from '../../Core/Contracts/ContactDetails';

interface IState {
    products: Array<Product>, 
    cart: CartHeader,
    addingToCart: number,
    registerMode: boolean,
    loginMode: boolean,
    registerData: ContactDetails
};


class Home extends Component {

    state: IState = {
        products: [
            { 
                id: 1,
                image: '/images/photos/pizza-1.jpg',
                alt: "pizza one",
                title: "name of first pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry11.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 2,
                image: '/images/photos/pizza-2.jpg',
                alt: "pizza two",
                title: "name of second pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry22.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 3,
                image: '/images/photos/pizza-3.jpg',
                alt: "pizza three",
                title: "name of third pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry33.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 4,
                image: '/images/photos/pizza-4.jpg',
                alt: "pizza four",
                title: "name of fourth pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry44.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 5,
                image: '/images/photos/pizza-5.jpg',
                alt: "pizza five",
                title: "name of fifth pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry55.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 6,
                image: '/images/photos/pizza-6.jpg',
                alt: "pizza six",
                title: "name of sixth pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry66.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 7,
                image: '/images/photos/pizza-7.jpg',
                alt: "pizza seven",
                title: "name of seventh pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry77.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            },
            { 
                id: 8,
                image: '/images/photos/pizza-8.jpg',
                alt: "pizza eight",
                title: "name of eigth pizza",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry88.",
                selectedSize: 'medium',
                prices: {small: 10, medium: 20, large: 30}
            }
        ],
        cart: {
            products: [],
            total: 0
        },
        registerData: {
            name: "",
            number: "",
            email: "",
            address: "",
            password: "",
            password_confirmation: ""
        },
        addingToCart: 0,
        registerMode: false,
        loginMode: false,
    }


    addToCartHandler = (id: number) =>{
        const products = [...this.state.products];
        const index = products.findIndex(p => p.id === id);
        
        if(index === -1) {
            return;
        } 

        this.setState({addingToCart: id});

        setTimeout( () => {
            this.setState({addingToCart: 0});
        }, 1000);

        let total = this.state.cart.total;
        total +=  products[index].prices[products[index].selectedSize];

        const cartProducts = [...this.state.cart.products];
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

        const cart = {...this.state.cart};
        cart.products = cartProducts;
        cart.total = total;
        this.setState({cart});
        
    }

    selectSizeHandler = (id: number, size: string) => {
        const products = [...this.state.products];
        const index = products.findIndex(p => p.id === id);
        if(index > -1) {
            products[index] = {...products[index], selectedSize: size};
            this.setState({products});
        } 
        
    }

    startRegistrationModeHandler = () => {
        this.setState({registerMode: true});
    }

    cancelRegistrationModeHandler = () => {
        this.setState({registerMode: false});
    }

    startLoginModeHandler = () => {
        this.setState({loginMode: true});
    }

    cancelLoginModeHandler = () => {
        this.setState({loginMode: false});
    }

    registrationInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const registerData = {...this.state.registerData};
        const name = event.target.name as keyof ContactDetails;

        if(name in registerData) {
            registerData[name] = event.target.value;

            this.setState({ registerData });
        }
        
    }

    render() {
        return (
            <div className={ styles.Home }>
                <Modal show={ this.state.registerMode } modalClosed={ this.cancelRegistrationModeHandler }>
                    <Register registerData={ this.state.registerData } inputChanged={ this.registrationInputChangeHandler } />
                </Modal>
                <Modal show={ this.state.loginMode } modalClosed={ this.cancelLoginModeHandler }>
                    <Login />
                </Modal>
                <Header 
                    cart={ this.state.cart } 
                    registerClicked={ this.startRegistrationModeHandler } 
                    loginClicked={ this.startLoginModeHandler } 
                />
                <Slider />
                <Menu 
                    products={ this.state.products }
                    addingToCart={ this.state.addingToCart }
                    addToCart={ this.addToCartHandler }
                    selectSize={ this.selectSizeHandler }
                />
                <Benefits />
                <Footer />
            </div>
        )
    }
}

export default Home