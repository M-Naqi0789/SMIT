// Log In...!

"use client";

import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logInUser } from '@/redux/actions/auth-actions/auth-actions';

const LogIn = () => {
    const [formStates, setFormStates] = useState({
        email: "",
        password: "",
        loading: false
    });

    const dispatch = useDispatch<AppDispatch>();

    const clearAllStates = () => {
        setFormStates({
            email: "",
            password: "",
            loading: false
        });
    }

    // Log In Handler...!
    const logInHandler = async () => {
        const user = {
            email: formStates.email,
            password: formStates.password
        };
        console.log('User: ', user);

        dispatch(logInUser(user)).finally(() => {
            clearAllStates();
        });
    }

    return (
        <div>
            <h1> Log In </h1>

            <label htmlFor="email">
                Email :
                <input
                    type="email"
                    placeholder='Enter Your Email'
                    value={formStates.email}
                    onChange={(e) => { setFormStates({ ...formStates, email: e.target.value }) }}
                    id='email'
                />
            </label>
            <br />
            <label htmlFor="password">
                Password :
                <input
                    type="password"
                    placeholder='*****'
                    value={formStates.password}
                    onChange={(e) => { setFormStates({ ...formStates, password: e.target.value }) }}
                    id='password'
                />
            </label>
            <br />
            <button onClick={logInHandler}> Log In </button>
        </div>
    );
};

export default LogIn;