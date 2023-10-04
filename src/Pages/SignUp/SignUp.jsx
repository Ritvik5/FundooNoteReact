import React, { Component, useState } from 'react'
import './SignUp.css'
import image from '../../Assets/logo.png'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../Service/UserService'
const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


export default function SignUp() {
    const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })

    const takeFirstName = (e) => {
        setData(prevState => (
            {
                ...prevState,
                firstName: e.target.value
            }))
    }

    const takeLastName = (e) => {
        setData(prevState => (
            {
                ...prevState,
                lastName: e.target.value
            }
        ))
    }

    const takeEmail = (e) => {
        setData(prevState => (
            {
                ...prevState,
                email: e.target.value
            }
        ))
    }

    const takePassword = (e) => {
        setData(prevState => (
            {
                ...prevState,
                password: e.target.value
            }
        ))
    }

    const takeConfirmPassword = (e) => {
        setData(prevState => (
            {
                ...prevState,
                confirmPassword: e.target.value
            }
        ))
    }


    console.log(data)

    const regObj = {
        firstNameBorder: false,
        firstNameHelper: '',
        lastNameBorder: false,
        lastNameHelper: '',
        emailBorder: false,
        emailHelper: '',
        passBorder: false,
        passHelper: '',
        confirmPassBorder: false,
        confirmPassHelper: '',
    }

    const [regexObj, setRegexObj] = useState(regObj)

    const verifyUserSignUp = () => {
        let firstNameCheck = nameRegex.test(data.firstName);
        let lastNameCheck = nameRegex.test(data.lastName);
        let emailCheck = emailRegex.test(data.email);
        let passCheck = passwordRegex.test(data.password);
        let conPassCheck = passwordRegex.test(data.confirmPassword);
        let passConfirmCheck = (data.password).matchAll(data.confirmPassword);

        if (firstNameCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Please enter a valid first name."
            }))
        } else if (firstNameCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ''
            }))
        }

        if (lastNameCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Please enter a valid last name"
            }))
        }
        else if (lastNameCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ''
            }))
        }

        if (emailCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Please enter a valid email"
            }))
        }
        else if (emailCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ''
            }))
        }

        if (passCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passBorder: true,
                passHelper: "Please enter a valid password"
            }))
        }
        else if (passCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passBorder: false,
                passHelper: ''
            }))
        }

        if (conPassCheck === false) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmPassBorder: true,
                confirmPassHelper: "Please enter the same password"
            }))
        }
        else if (conPassCheck === true) {
            setRegexObj(prevState => ({
                ...prevState,
                confirmPassBorder: false,
                confirmPassHelper: ''
            }))
        }

        if (firstNameCheck === true && lastNameCheck === true && emailCheck === true && passCheck === true && conPassCheck === true) {
            signup(data).then((response) => {
                navigateToSignIn();
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    let navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate("/")
    }

    return (
        <div className="signup-page">
            <div className="main-content">
                <div className="signup-block">
                    <div className="logo-head">
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
                    <div className="head-label"><p>Create your Fundoo Account</p></div>
                    <div className="fullname">
                        <TextField onChange={takeFirstName} label="First name" error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} variant="outlined" size="small" />
                        <TextField onChange={takeLastName} label="Last name" error={regexObj.lastNameBorder} helperText={regexObj.firstNameHelper} variant="outlined" size="small" />
                    </div>
                    <div className="username">
                        <TextField onChange={takeEmail} label="Username" error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" fullWidth size="small" />
                        <small>You can use letters,numbers & periods</small>
                    </div>
                    <div className="current-email"><a href="">Use my current email address instead</a></div>
                    <div className="password">
                        <TextField onChange={takePassword} label="Password" error={regexObj.passBorder} helperText={regexObj.passHelper} variant="outlined" size="small" type="password" />
                        <TextField onChange={takeConfirmPassword} label="Confirm" error={regexObj.confirmPassBorder} helperText={regexObj.confirmPassHelpers} variant="outlined" size="small" type='password'/>
                        <small className="pass-text">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                    </div>
                    <div className="show-password">
                        <input type={"checkbox"} value="Show password" />
                        <small>Show password</small>

                    </div>
                    <div className="buttons">
                        <span className="sign-in-btn"><a href='#' className="link-text" onClick={navigateToSignIn}>Sign in instead</a></span>
                        <Button onClick={() => {
                            verifyUserSignUp();
                        }} className=".next-button" variant="contained" >Next</Button>
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