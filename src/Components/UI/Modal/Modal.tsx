import React, { Component, ReactNode } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

interface IProps {
    show: boolean,
    modalClosed: Function,
    children: ReactNode
}

class Modal extends Component<IProps>{

    shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return(
            <div>
                <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
                <div 
                    className = {classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(calc(-100vh - 85px))',
                        opacity: this.props.show ? '1' : '0'
                    }} >
                    {this.props.children}
                    <div className= { classes.ExitButton}>
                        <img onClick={ () => this.props.modalClosed() } src="/images/icons/exit_button.png" alt="exit button"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;