import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import Menu from '../../Components/Menu/Menu';
import Benefits from '../../Components/Benefits/Benefits';
import Footer from '../../Components/Footer/Footer';
import Product from '../../Core/Contracts/Product';
import axios from '../../axios-instance';

import styles from './Home.module.css';
import { AxiosResponse } from 'axios';

interface IState {
    products: Array<Product>, 
};


class Home extends Component {

    state: IState = {
        products: [
           
        ]
    }

    componentDidMount () {
        console.log("did mount");
        axios.get('/products')
            .then( (response: AxiosResponse) => {
                const data: Array<Product> = response.data;
                const products: Array<Product> = data.map( prod => {
                    prod.selectedSize = 'medium';
                    return prod;
                });
                
                console.log(products);
                this.setState({ products });
            })
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
        let content = null;
        console.log(this.state);

        if(this.state.products.length) {
            content = (
                <div className={ styles.Home }>
                    <Slider />
                    <Menu 
                        products={ this.state.products }
                        selectSize={ this.selectSizeHandler }
                    />
                    <Benefits />
                    <Footer />
                </div>
            );
        }

        return content;
    }
}

export default Home