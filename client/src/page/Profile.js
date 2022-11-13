import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import { AuthContext } from "../context/AuthContext";
import fetchData from "../hook/fetchData"


export default function Profile() {

    const {user} = useContext(AuthContext);
    const userParams = useParams();
    const { data } = fetchData(`/api/users/${userParams.id}`)

    const [newInputs, setNewInputs] = useState({
        username: "",
        email: "",
        password: "",
        profImg: "",
        isAdmin: user.isAdmin,
    })

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
                                            <div class="shrink-0 mt-5 px-3 mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#6B7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <circle cx="12" cy="12" r="9" />
                                                    <circle cx="12" cy="10" r="3" />
                                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                                </svg>
                                            </div>
                                            <div class="px-3 mb-2">
                                                <div class="flex justify-center items-center w-full">
                                                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-strokeColour border-dashed cursor-pointer hover:bg-gray-100">
                                                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" type="file" class="hidden" />
                                                    </label>
                                                </div> 
                                            </div>
                                            
                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'>user name</label>
                                                <input class='appearance-none block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                type='text' 
                                                required
                                                />
                                            </div>

                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2' for='grid-text-1'>Email address</label>
                                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                id='grid-text-1' 
                                                type='text' 
                                                placeholder='Enter email' 
                                                required/>
                                            </div>

                                            <div class='w-full md:w-full px-3 mb-6 '>
                                                <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'>Password</label>
                                                <input class='appearance-none block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500' 
                                                id='grid-text-1' 
                                                type='password' 
                                                placeholder='Enter password' 
                                                required/>
                                            </div>

                                            <div class="personal w-full border-t border-strokeColour pt-4">
                                                <h2 class="text-2xl text-gray-900">Personal info:</h2>
                                                <div class="flex items-center justify-between mt-4">
                                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                                        <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2' >First name</label>
                                                        <input class='appearance-none block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                                    </div>
                                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                                        <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2' >last name</label>
                                                        <input class='appearance-none block w-full bg-white text-gray-900 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required/>
                                                    </div>
                                                </div>
                                                <div class='w-full md:w-full px-3 mb-6'>
                                                    <label class='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2' >Bio</label>
                                                    <textarea class='bg-white rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  required></textarea>
                                                </div>
                                                <div class="flex justify-end">
                                                    <button class="appearance-none bg-mainBlue text-white px-3 py-2 shadow-sm border border-gray-400 rounded-lg mr-3" type="submit">Save changes</button>
                                                </div>
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