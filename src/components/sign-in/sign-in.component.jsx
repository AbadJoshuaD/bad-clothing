import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error)
        }
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I have already account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label ="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                    <FormInput type="password" label="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn; 