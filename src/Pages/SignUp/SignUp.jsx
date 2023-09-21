import React, { Component } from 'react'
import './SignUp.css'
import image from '../../Assets/logo.png'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

export default function SignUp() {
    return (
        <div className="signupPage">
            <div className="mainContent">
                <div className="signupBlock">
                    <div className="logoHead">
                        <span>
                            <h2 style={{color:"#2596be"}}>F</h2>
                        </span> <span>
                            <h2 style={{color:"#d3441c"}}>u</h2>
                        </span><span>
                            <h2 style={{color:"#eab676"}}>n</h2>
                        </span><span>
                            <h2 style={{color:"#8876ea"}}>d</h2>
                        </span><span>
                            <h2 style={{color:"#ea76e4"}}>o</h2>
                        </span><span>
                            <h2 style={{color:"#ea76e4"}}>o</h2>
                        </span>
                    </div>
                    <div className="headLabel"><p>Create your Fundoo Account</p></div>
                    <div className="fullName">
                        <TextField label="First name" variant="outlined" size="small" required />
                        <TextField label="Last name" variant="outlined" size="small" required />
                    </div>
                    <div className="userName">
                        <TextField label="UserName" variant="outlined" fullWidth size="small" required />
                        <small>You can use letters,numbers & periods</small>
                    </div>
                    <div className="currentEmail"><a href="">Use my current email address instead</a></div>
                    <div className="password">
                        <TextField label="Password" variant="outlined" size="small" required />
                        <TextField label="Confirm" variant="outlined" size="small" required />
                        <small className="pass-text">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                    </div>
                    <div className="showPassword">
                        <input type={"checkbox"} value="Show password" />Show password

                    </div>
                    <div className="buttons">
                        <span className="sign-in-btn"><a href='#' className="link-text">Sign in instead</a></span>
                        <Button className=".next-button" variant="contained" >Next</Button>
                    </div>

                </div>
                <div className="side-logo">
                    <img src={image} alt="google account" className="side-logo-img" />
                    <p className="side-logo-text">One Account. All of Google working for you.</p>
                </div>

            </div>

        </div>
    )
}