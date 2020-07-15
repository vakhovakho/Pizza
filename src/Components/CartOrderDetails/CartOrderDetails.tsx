import React from 'react';
import styles from './CartOrderDetails.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';

const CartOrderDetails = (props: {total: number, show: boolean, backToCartClicked: Function}) => {
    return (
        <div className={ [styles.CartOrderDetails, props.show ? styles.Show : ''].join(" ") }>
            
            <div className={ styles.CartOrderDetailsTop}>
                <div className={ styles.OrderDetailsName}>
                    <h2>Contact details</h2>
                    <Input type="text" id="name" name="name" caption="Full Name" value="" required/>
                </div>
                <div className={ styles.OrderDetailsNumber}>
                    <Input type="text" id="number" name="number" caption="Phone number" value="" required/>
                </div>
                <div className={ styles.OrderDetailsEmail}>
                    <Input type="text" id="e-mail" name="e-mail" caption="E-mail" value="" required/>
                </div>
            </div>
            <div className={ styles.CartOrderDetailsMiddle}>
                <div className={ styles.OrderDetailsAddress}>
                    <h2>Order address</h2>
                    <Input type="text" id="street" name="street" caption="Street Name" value="" required/>
                </div>
                <div  className={ styles.OrderDetailsComment}>
                    <p>Comment</p>
                    <textarea className={ styles.OrderDetailsInputComment}
                        id="comment" name="comment" rows={4} cols={50}></textarea>
                </div>
            </div>
            <div className={ styles.CartOrderDetailsBottom}>
                <div className={ styles.OrderDetailsAmount}>
                    <p>Amount payable</p>
                    <p>{ props.total }$</p>
                </div>
                <div className={ styles.OrderDetailsDeal}>
                    <Button onClick={() => props.backToCartClicked()}>Back to cart</Button>
                    <Button>Make a deal</Button>
                </div>
            </div>
        
        </div>
    );
}

export default CartOrderDetails;