import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from '../Pages/SignUp/SignUp'
import SignInForm from '../Pages/SignIn/SignIn'
import Dashboard from '../Component/Dashboard/dashboard';
import { AuthRoute } from './AuthRoute';
import { ProtectedRoute } from './ProtectedRoute';


export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><SignInForm /></AuthRoute>}></Route>
                    <Route exact path={"/signup"} element={<AuthRoute><SignUpForm /></AuthRoute>}></Route>
                    <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}