import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import Navbar from "../components/Navbar"
import { AuthContext } from "../context/AuthContext";
import fetchData from "../hook/fetchData"
import axios from "../api/axios";

export default function Profile() {
    
    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext);
    const userParams = useParams();
    const { data } = fetchData(`/api/users/${userParams.id}`)

    const [currInfo, setCurrInfo] = useState({
        username: user.username,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
    })

    const [newInputs, setNewInputs] = useState({
        username: "",
        email: "",
        password: "",
        isAdmin: user.isAdmin,
    })

    const handleChange = (e) => {
        setNewInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const submitChange = async(event) => {
        event.preventDefault();
        try {
            await axios.put(`/api/users/${userParams.id}`, newInputs)
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    const submitDelete = async(e) => {
        e.preventDefault();
        try {
            await axios.delete(`/api/users/${userParams.id}`)
            console.log("deleted a user")
            dispatch({type: "DELETED"})
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
            <Navbar/>

            <div class="px-8 lg:mx-40">
                <main class="px-8 pb-8 mt-4 md:mx-40 sm:mx-0">
                    <section>
                        <div class="bg-white border border-strokeColour rounded-xl pt-2 my-16">
                            <div class="container mx-auto">
                                <div class="inputs w-full max-w-2xl p-6 mx-auto">
                                    <h2 class="text-2xl text-gray-900">Account Setting</h2>
                                    
                                    <form class="mt-6 border-t border-strokeColour pt-4">
                                        <div class='flex flex-col -mx-3 mb-6'>                                            
                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'>user name</label>
                                                <input class='block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                type='text' 
                                                name="username"
                                                defaultValue={currInfo.username}
                                                onChange={handleChange}
                                                />
                                            </div>

                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2' for='grid-text-1'>Email address</label>
                                                <input class='block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                id='grid-text-1' 
                                                type='text' 
                                                name="email"
                                                defaultValue={currInfo.email}
                                                onChange={handleChange}
                                                />
                                            </div>

                                            <div class='w-full md:w-full px-3 mb-6 '>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'>Password</label>
                                                <input class='block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                id='grid-text-1' 
                                                type='password' 
                                                name="password"
                                                defaultValue={currInfo.password}
                                                onChange={handleChange}
                                                />
                                            </div>

                                            <div class="flex justify-between">
                                                <button class="bg-gray-400 text-gray-400 px-3 py-2 shadow-sm border border-gray-400 rounded-lg" 
                                                type="submit"
                                                onClick={submitDelete}
                                                >
                                                    Delete Account
                                                </button>
                                                
                                                <button class="bg-mainBlue text-white px-3 py-2 shadow-sm border border-gray-400 rounded-lg" 
                                                type="submit"
                                                onClick={submitChange}
                                                >
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}