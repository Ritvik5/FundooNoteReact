import React, { Component, useState } from 'react'
import './SignIn.css'
import { TextField } from '@mui/material';

export default function SignIn() {

    const [data, setData] = useState({email: '', password: ''});


    const takeEmail = (email) => {
        setData(prevState => ({
            ...prevState,
            email: email.target.value,
            
        }))
    }

    const takePassword = (pass) => {
        setData(prevState =>({
            ...prevState,
            password: pass.target.value
        }))
    }

    return (
        <div className="loginPage">
            <div className="mainContent">
                <div className="loginContent">
                    <div className="fundooTitle">
                        <span className="letterF">
                            <h2>F</h2>
                        </span> <span className="letterU">
                            <h2>u</h2>
                        </span><span className="letterN">
                            <h2>n</h2>
                        </span><span className="letterD">
                            <h2>d</h2>
                        </span><span className="letterO">
                            <h2>o</h2>
                        </span><span className="letterOO">
                            <h2>o</h2>
                        </span>
                    </div>
                    <div className="signInText">
                        Sign In
                    </div>
                    <div className="fundooText">
                        Use Your Fundoo Account
                    </div>
                    <form>
                        <div className="emailBlock">
                        <TextField label="First name" onChange={takeEmail} variant="outlined" size="small" required />
                        </div>
                        <div className="passwordBlock">
                        <TextField label="Password"  onChange = {takePassword} variant="outlined" size="small" required />
                            <a href="">Forget Password?</a>
                        </div>
                    </form>
                    <div className="buttonBlock">
                        <div className="createAccBtn">
                            <a href="./register.html">Create account</a>

                        </div>
                        <div>
                            <button className="nextBtn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}