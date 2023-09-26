import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from '../Pages/SignUp/SignUp'
import SignInForm from '../Pages/SignIn/SignIn'
import Dashboard from '../Component/Dashboard/dashboard';

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<SignInForm />}></Route>
                    <Route exact path={"/signup"} element={<SignUpForm />}></Route>
                    <Route exact path= {"/dashboard"} element={<Dashboard/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}