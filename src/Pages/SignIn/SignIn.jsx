import React, { useState } from 'react'
import './SignIn.css'
import { TextField } from '@mui/material';
import { signin } from '../../Service/UserService';
import { useNavigate } from 'react-router-dom';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function SignIn() {

    let navigate = useNavigate();

    const [signInObj, setSignInObj] = useState({ email: '', password: '' });

    const regObj = { emailBorder: false, emailHelper: '', passBorder: false, passHelper: '' }

    const [regexObj, setRegexObj] = useState(regObj)

    
    const takeEmail = (email) => {
        setSignInObj(prevState => (
            {
                ...prevState,
                email: email.target.value,

            }))
    }

    const takePassword = (pass) => {
        setSignInObj(prevState => (
            {
                ...prevState,
                password: pass.target.value
            }))
    }
    console.log(signInObj);

    const verifyEmailPass = () => {
        //let navigate = useNavigate();
        let emailCheck = emailRegex.test(signInObj.email)
        let passCheck = passwordRegex.test(signInObj.password)

        if (emailCheck === false) {
            setRegexObj(prevState => (
                {
                    ...prevState,
                    emailBorder: true,
                    emailHelper: 'Enter a valid email'
                }
            ))
        }

        if (passCheck === false) {
            setRegexObj(prevState => (
                {
                    ...prevState,
                    passBorder: true,
                    passHelper: 'Password should be at least 8 characters'
                }
            ))
        }

        if(emailCheck === true && passCheck === true){
            signin(signInObj).then((response) =>{
                console.log(response);
                localStorage.setItem("token",response.data.result);
                console.log(response.data.result);
                navigate("/dashboard");
            }).catch((error) =>{
                console.log(error)
            })
        }

        
       
    }

    

    const navigateToSignUp = () =>{
        navigate("/signup");
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
                            <TextField label="First name" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" size="small" required />
                        </div>
                        <div className="passwordBlock">
                            <TextField label="Password" onChange={takePassword} error={regexObj.passBorder} helperText={regexObj.passHelper} variant="outlined" size="small" required />
                            <a href="#" className='linkText'>Forget Password?</a>
                        </div>
                    </form>
                    <div className="buttonBlock">
                        <div className="createAccBtn">
                            <a href="#" onClick={navigateToSignUp}>Create account</a>

                        </div>
                        <div>
                            <button onClick={verifyEmailPass} className="nextBtn" variant="contained" >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}