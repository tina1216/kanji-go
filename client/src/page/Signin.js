import logo from '../img/kanjiGo_logo.svg'
import Header from '../components/Header'
import {useContext, useState} from "react"
import { useNavigate } from 'react-router';

import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const SIGNIN_URL = "/api/auth/signin"

export default function Signin() {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const {user, loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate()

    const signinUser = (e) => {
        setCredentials( (prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleSignin = async(e) => {
        e.preventDefault();
        dispatch({type: "SIGNIN_START"})
        try {
            const res = await axios.post(SIGNIN_URL, credentials)
            dispatch({type: "SIGNIN_SUCCESS", payload: res.data})
            navigate("/dashboard")
        } catch(err) {
            dispatch({type: "SIGNIN_FAILURE", payload: err.response.data})
        }
        console.log(user)
    }

    return (
        <>
            <Header/>
            <div class="flex items-center justify-center h-screen bg-almostWhite">
                <form>
                    <div class="bg-white w-96 p-6 rounded shadow-sm">
                        <div class="flex items-center justify-center mb-4">
                            <img src={logo} alt="" class="h-32" />
                        </div>
                        
                        { error && 
                        <div class="hidden bg-red-500 px-3 py-2 rounded text-white mb-3">
                            <p>Wrong email or password</p>
                        </div>
                        }

                        <label for="" class="text-gray-700">Email Address</label>
                        <input 
                        type="email"
                        id="email" 
                        class="w-full py-2 bg-almostWhite text-gray-500 px-1 outline-none outline-strokeColour focus:outline-none focus:ring focus:border-blue-500 mb-4 rounded drop-shadow-sm" 
                        onChange={signinUser}
                        />

                        <label for="" class="text-gray-700">Password</label>
                        <input 
                        type="password" 
                        id="password"
                        class="w-full py-2 bg-almostWhite text-gray-500 px-1 outline-none outline-strokeColour focus:outline-none focus:ring focus:border-blue-500 mb-4 rounded drop-shadow-sm" 
                        onChange={signinUser}
                        />

                        <button id="submit" onClick={handleSignin} disabled={loading} type="subumit" class="bg-mainBlue w-full text-white py-2 rounded hover:opacity-75 transition-colors">Sign in</button>
                        <p>Don't have an account? <a href="/signup" class="text-blue-500">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}