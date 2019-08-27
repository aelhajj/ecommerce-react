import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

// We are using a class so we can save what the users types in
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    // Function to handle the submiting event of the sign up form
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }
    // Function to handle to value of the inputs in the form (password and email)
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='Email'
                    handleChange={this.handleChange} 
                    required
                    />
                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    label='Password'
                    required
                    />
                    <CustomButton type='submit' value='Submit form'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
                </form>
                
            </div>
        );
    }
};

export default SignIn;