import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (event) => {
        event.preventDefault()  // this line will stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage...
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }
    const register = (event) => {
        event.preventDefault()  //this line will stops the refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth =>{
                // created a user and logged in, redirect to homepage...
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                 className="login_logo"
                 src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
                 alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's <span>Conditions of use</span> and <span>Privacy Notice</span>.
                    <br/><br/>
                    <span>Need help?</span>
                </p>
            </div>
            <div className="create_account">
                <h6> New to Amazon? </h6>
                <div></div>
                <button onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
