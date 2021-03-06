import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        // if user logs in with e-mail :
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };
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
                    autoComplete='current-email'
                    required
                    />
                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    label='Password'
                    autoComplete='current-password'
                    required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit form'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignIn;