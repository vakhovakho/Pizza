import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Slider from '../../Components/Slider/Slider';
import Menu from '../../Components/Menu/Menu';
import Benefits from '../../Components/Benefits/Benefits';
import Footer from '../../Components/Footer/Footer';

import styles from './Home.module.css';


class Home extends Component {

    render() {
        return (
            <div className={ styles.Home }>
            <Navigation />
            <Slider />
            <Menu />
            <Benefits />
            <Footer />
            </div>
        )
    }
}

export default Home