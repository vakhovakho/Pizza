import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import Menu from '../../Components/Menu/Menu';
import Benefits from '../../Components/Benefits/Benefits';
import Footer from '../../Components/Footer/Footer';
import Product from '../../Core/Contracts/Product';

import styles from './Home.module.css';
import CartHeader from '../../Core/Contracts/CartHeader';

interface IState {
    products: Array<Product>
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
        ]
    }


    selectSizeHandler = (id: number, size: string) => {
        const products = [...this.state.products];
        const index = products.findIndex(p => p.id === id);
        if(index > -1) {
            products[index] = {...products[index], selectedSize: size};
            this.setState({products});
        } 
        
    }

    render() {
        return (
            <div className={ styles.Home }>
                <Header />
                <Slider />
                <Menu 
                    products={ this.state.products }
                    selectSize={ this.selectSizeHandler }
                />
                <Benefits />
                <Footer />
            </div>
        )
    }
}

export default Home