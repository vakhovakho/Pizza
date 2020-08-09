import React, { useState } from 'react';
import styles from './Register.module.css';
import Input from '../UI/Form/Input/Input';
import Button from '../UI/Form/Button/Button';
import ContactDetails from '../../Core/Contracts/ContactDetails';
import { connect } from 'react-redux';
import { registration } from '../../redux/user/actions'; 

const Register = ( props: {registration: Function}) => {

    const initialRegisterData: ContactDetails = {
        name: "",
        address: "",
        number: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    const [registrationData, setRegistrationData] = useState(initialRegisterData);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = {...registrationData};
        const name = event.target.name as keyof ContactDetails;

        if(name in data) {
            data[name] = event.target.value;
            setRegistrationData(data);            
        }
        
    }


    return (
        <div className={ styles.Register }>
            <div className={ styles.RegisterContact }>
                <h2>Contact information</h2>
                <Input type="text" id="name" name="name" caption="Full Name" required onChange={ inputChangeHandler }  value={ registrationData.name } />
                <Input type="text" id="number" name="number" caption="Phone number" required onChange={ inputChangeHandler }  value={ registrationData.number }/>
                <Input type="text" id="address" name="address" caption="Address" required onChange={ inputChangeHandler }  value={ registrationData.address }/>
            </div>
            <div className={ styles.RegisterLogin }>
                <h2>Login information</h2>
                <Input type="email" id="email" name="email" caption="E-mail" required onChange={ inputChangeHandler }  value={ registrationData.email }/>
                <Input type="password" id="password" name="password" caption="Type your password" required onChange={ inputChangeHandler }  value={ registrationData.password ?? '' }/>
                <Input type="password" id="password_confirmation" name="password_confirmation" caption="Repeat your password" required onChange={ inputChangeHandler }  value={ registrationData.password_confirmation ?? '' }/>
            </div>
            <Button onClick={ () => props.registration(registrationData) }> Register </Button>
        </div>
    );
}

export default connect( null, { registration })(Register)
