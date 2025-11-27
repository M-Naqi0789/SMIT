// Sign Up...!

"use client";

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const SignUp = () => {
    const [formStates, setFormStates] = useState({
        name: "",
        email: "",
        password: "",
        loading: false
    });

    const clearAllStates = () => {
        setFormStates({
            name: "",
            email: "",
            password: "",
            loading: false
        });
    }

    // Sign Up Handler...!
    const signUpHandler = async () => {
        const user = {
            name: formStates.name,
            email: formStates.email,
            password: formStates.password
        };
        console.log('User: ', user);

        try {
            const createUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
            console.log(createUser);
        }

        catch (error: any) {
            console.log('Something wnet wrong while creating user: ', error.message);
        }
    }

    return (
        <div>
            <h1> Sign Up </h1>

            <label htmlFor="username">
                Name :
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    value={formStates.name}
                    onChange={(e) => { setFormStates({ ...formStates, name: e.target.value }) }}
                    id='username'
                />
            </label>
            <br />
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
            <button onClick={signUpHandler}> Sign Up </button>
        </div>
    );
};

export default SignUp;