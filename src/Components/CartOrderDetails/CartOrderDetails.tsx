import React from 'react';
import styles from './CartOrderDetails.module.css';

const CartOrderDetails = (props: any) => {
    return (
        <div className={ styles.CartOrderDetails }>
            <form>
                <div className={ styles.CartOrderDetailsTop}>
                    <div className={ styles.OrderDetailsName}>
                        <h2>Contact details</h2>
                        <p>Your name</p>
                        <input className={ styles.OrderDetailsInput}
                            type="text" id="name" name="name" required/>
                    </div>
                    <div className={ styles.OrderDetailsNumber}>
                        <p>Phone number</p>
                        <input className={ styles.OrderDetailsInput}
                            type="text" id="number" name="number" required/>
                    </div>
                    <div className={ styles.OrderDetailsEmail}>
                        <p>E-mail address</p>
                        <input className={ styles.OrderDetailsInput}
                            type="text" id="email" name="email" required/>
                    </div>
                </div>
                <div className={ styles.CartOrderDetailsMiddle}>
                    <div className={ styles.OrderDetailsAddress}>
                        <h2>Order address</h2>
                        <p>Street</p>
                        <input className={ styles.OrderDetailsInput}
                            type="text" id="street" name="street" required/>
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
                        <p>100$</p>
                    </div>
                    <div className={ styles.OrderDetailsDeal}>
                        <button type="button">Back to cart</button>
                        <button type="button">Make a deal</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CartOrderDetails;