import React from 'react';
import styles from './CartOrderDetails.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';
import ContactDetails from '../../Core/Contracts/ContactDetails';

const CartOrderDetails = (props: {total: number, show: boolean, backToCartClicked: Function, inputChanged: Function, contactDetails: ContactDetails}) => {
    return (
        <div className={ [styles.CartOrderDetails, props.show ? styles.Show : ''].join(" ") }>
            
            <div className={ styles.CartOrderDetailsTop}>
                <div className={ styles.OrderDetailsName}>
                    <h2>Contact details</h2>
                    <Input type="text" id="order-details-name" name="name" caption="Full Name" value={ props.contactDetails.name } required onChange={ props.inputChanged }/>
                </div>
                <div className={ styles.OrderDetailsNumber}>
                    <Input type="text" id="order-details-number" name="number" caption="Phone number" value={ props.contactDetails.number } required onChange={ props.inputChanged }/>
                </div>
                <div className={ styles.OrderDetailsEmail}>
                    <Input type="text" id="order-details-email" name="email" caption="E-mail" value={ props.contactDetails.email } required onChange={ props.inputChanged }/>
                </div>
            </div>
            <div className={ styles.CartOrderDetailsMiddle}>
                <div className={ styles.OrderDetailsAddress}>
                    <h2>Order address</h2>
                    <Input type="text" id="order-details-address" name="address" caption="Street Name" value={ props.contactDetails.address } required onChange={ props.inputChanged } />
                </div>
                <div  className={ styles.OrderDetailsComment}>
                    <p>Comment</p>
                    <textarea 
                        className={ styles.OrderDetailsInputComment}
                        id="comment" 
                        name="comment" 
                        onChange={(event) => props.inputChanged(event)}
                        rows={4} 
                        cols={50}
                        value={ props.contactDetails.comment }></textarea>
                </div>
            </div>
            <div className={ styles.CartOrderDetailsBottom}>
                <div className={ styles.OrderDetailsAmount}>
                    <p>Amount payable:</p>
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