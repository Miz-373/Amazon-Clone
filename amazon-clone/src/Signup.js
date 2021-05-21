import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //if seccessfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }

            })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-up</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={register} className='login__signInButton'>Sign Up</button>
                </form>

                    <div className="Signup__Area">
                        <p className="newToAmazon">Return To</p>
                        <Link to="Login"><button className='login__registerButton'>Loggin Page</button></Link>
                    </div>
                    <p>
                      By signing-up you agree to AMAZON FAKE CLONE Conditions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
            </div>
        </div>
    )
}

export default Signup;
