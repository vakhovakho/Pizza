import React from 'react';
import Pizza from './Pizza/Pizza';
import styles from './Menu.module.css';

const Menu = () => {
    return (
    <div className={ styles.Menu }> 
        <Pizza 
            image='/images/photos/pizza-1.jpg' 
            alt="pizza one"
            title="name of first pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry11."
            />
        <Pizza 
            image='/images/photos/pizza-2.jpg' 
            alt="pizza two"
            title="name of second pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry22."/>
        <Pizza 
            image='/images/photos/pizza-3.jpg' 
            alt="pizza three"
            title="name of third pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry33."/>
        <Pizza 
            image='/images/photos/pizza-4.jpg' 
            alt="pizza four"
            title="name of fourth pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry44."/>
        <Pizza 
            image='/images/photos/pizza-5.jpg' 
            alt="pizza five"
            title="name of fifth pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry55."/>
        <Pizza 
            image='/images/photos/pizza-6.jpg' 
            alt="pizza six"
            title="name of sixth pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry66."/>
        <Pizza 
            image='/images/photos/pizza-7.jpg' 
            alt="pizza seven"
            title="name of seventh pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry77."/>
        <Pizza 
            image='/images/photos/pizza-8.jpg' 
            alt="pizza eight"
            title="name of eigth pizza"
            description="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry88."/>
    </div>);
}

export default Menu;