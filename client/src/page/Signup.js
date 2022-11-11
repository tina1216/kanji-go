import logo from '../img/kanjiGo_logo.svg'
import Header from '../components/Header'
import {useContext, useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const SIGNUP_URL = "/api/auth/signup"

export default function Signup() {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
      });

    const [err, setError] = useState(null);
    const {dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(SIGNUP_URL, inputs);
        dispatch({type: "SIGNIN_SUCCESS", payload: res.data})
        navigate("/dashboard");
    } catch (err) {
        setError(err.response.data);
    }
    };

    return (
        <>
            <Header/>
            <div class="flex items-center justify-center h-screen bg-almostWhite">
                <form>
                    <div className="bg-white w-96 p-6 rounded shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                            <img src={logo} alt="" className="h-32"/>
                        </div>
                        {err && <div className="hidden bg-red-500 px-3 py-2 rounded text-white mb-3">
                            <p>Wrong format</p>
                        </div>}
                        <label for="" className="text-gray-700">Email Address</label>
                        <input 
                        type="email" 
                        className="w-full py-2 bg-almostWhite text-gray-500 px-1 outline-none outline-strokeColour focus:outline-none focus:ring focus:border-blue-500 mb-4 rounded drop-shadow-sm"
                        name="email"
                        onChange={handleChange}
                        />
                        
                        <label for="" className="text-gray-700">Username</label>
                        <input 
                        type="text" 
                        className="w-full py-2 bg-almostWhite text-gray-500 px-1 outline-none outline-strokeColour focus:outline-none focus:ring focus:border-blue-500 mb-4 rounded drop-shadow-sm"
                        name="username"
                        onChange={handleChange}
                        />

                        <label for="" className="text-gray-700">Password</label>
                        <input 
                        type="password" 
                        className="w-full py-2 bg-almostWhite text-gray-500 px-1 outline-none outline-strokeColour focus:outline-none focus:ring focus:border-blue-500 mb-4 rounded drop-shadow-sm"
                        name="password"
                        onChange={handleChange}
                        />
                        
                        <button onClick={handleSignup} type="subumit" className="bg-mainBlue w-full text-white py-2 rounded hover:opacity-75 transition-colors">Sign up</button>
                        
                        <p>Already have an account? <a href="/signin" className="text-blue-500">Sign In</a></p>
                    </div>
                </form>
            </div>
        </>
    );
}