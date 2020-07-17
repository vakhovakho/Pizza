import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import CartItems from '../../Components/CartItems/CartItems';
import CartOrderDetails from '../../Components/CartOrderDetails/CartOrderDetails';
import Button from '../../Components/UI/Form/Button/Button';

import styles from './Cart.module.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct, removeProduct, substractProduct } from '../../redux/cart/actions';
import { getCartData } from '../../redux/cart/selectors';

import Product from '../../Core/Contracts/Product';
import ContactDetails from '../../Core/Contracts/ContactDetails';
import CartHeader from '../../Core/Contracts/CartHeader';

interface IState {
    products: Array<Product>, 
    orderConfirmed: boolean,
    contactDetails: ContactDetails
};

interface IProps {
    addProduct?: Function,
    removeProduct?: Function,
    substractProduct?: Function,
    cartHeaderData?: CartHeader
}

class Cart extends Component<IProps> {
    state: IState = {
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
        orderConfirmed: false,
        contactDetails: {
            name: "",
            number: "",
            address: "",
            email: "",
            comment: ""
        },
    };

    changeCountHandler = (id: number, increase: boolean) => {
        if(this.state.orderConfirmed) {
            return;
        }

        const products = [...this.state.products];
        const index = products.findIndex( prod => prod.id === id);
        if(index > -1) {
            if(increase) {
                if(this.props.addProduct !== undefined) {
                    this.props.addProduct(products[index]);
                    products[index].count = (products[index].count ?? 0) + 1;
                }
            } else {
                if(products[index].count === 1) {
                    return this.deleteHandler(products[index]);
                } else {
                    if(this.props.substractProduct !== undefined) {
                        this.props.substractProduct(products[index]);
                        products[index].count = (products[index].count ?? 0) - 1;
                    }
                    
                }
            }
            
            this.setState({products});
        }
    }

    deleteHandler = (product: Product) => {
        console.log(product);

        if(this.state.orderConfirmed) {
            return;
        }

        if(this.props.removeProduct !== undefined) {
            this.props.removeProduct(product);
            const products = [...this.state.products].filter( prod => prod.id !== product.id );
    
            this.setState({products});
        } 
    }

    confirmClickHandler = () => {
        if(this.state.orderConfirmed) {
            return;
        }

        this.setState({orderConfirmed: true});
    }

   
    backToCartHandler = () => {
        this.setState({orderConfirmed: false});
    }

    inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const contactDetails = {...this.state.contactDetails};
        const name = event.target.name as keyof ContactDetails;

        if(name in contactDetails) {
            contactDetails[name] = event.target.value;

            this.setState({ contactDetails });
        }
        
    }

    render() {

        let cartItems = (
            <div className={ styles.EmptyCart }>
                <h3>Cart Is Empty</h3>
                <Link to="/">
                    <Button>Back To Home</Button>
                </Link>
                
            </div>
        );

        if(this.props.cartHeaderData && this.props.cartHeaderData.total) {
            cartItems = (
                <CartItems 
                    products={ this.state.products }
                    orderConfirmed={ this.state.orderConfirmed }
                    changeCount={ this.changeCountHandler }
                    total = { this.props.cartHeaderData ? this.props.cartHeaderData.total : 0 }
                    confirmClick = { this.confirmClickHandler }
                    deleteClick = { this.deleteHandler }
                />
            );
        }

        return (
            <div className={ styles.Cart }>
                <div className={ styles.CartBody }>
                    { cartItems }
                    <CartOrderDetails 
                        total={ this.props.cartHeaderData ? this.props.cartHeaderData.total : 0 } 
                        show={ this.state.orderConfirmed } 
                        backToCartClicked={ this.backToCartHandler }
                        inputChanged={ this.inputChangeHandler }
                        contactDetails={ this.state.contactDetails }
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect( state => ({ cartHeaderData: getCartData(state as {cart: CartHeader} ) }), { addProduct, substractProduct, removeProduct })(Cart)