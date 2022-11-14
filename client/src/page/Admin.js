import logo from '../img/logo_rec.svg'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import fetchData from "../hook/fetchData"
import axios from '../api/axios';

export default function Admin() {
    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext);

    const { userData } = fetchData("/api/users")
    console.log(userData)
    const { questionData } = fetchData(`/api/questions`)

    //delete
    const deleteUser = async(userId) => {
        try {
            await axios.delete(`/api/users/${userId}`)
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <header class="h-16 flex items-center justify-between border-b border-gray-300">
                <aside class="px-4 flex items-center justify-center">
                    <div class="pt-2 w-28">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                </aside>

                {user && 
                    <aside class="flex items-center pr-3 space-x-3">
                        <span>{user.username}</span>
                        <div class="flex items-center">
                            <Link to="/" 
                            className="hidden md:block p-3 px-4 pt-2 text-mainBlue rounded-full bg-white baseline hover:text-white hover:bg-mainBlue outline outline-1"
                            onClick={() => {
                                navigate("/")
                                dispatch({type: "SIGNOUT"})
                                localStorage.clear()
                                }}
                                >
                                Sign Out
                            </Link>
                        </div>
                    </aside>}
            </header>

            <div class="px-8 pb-8 lg:mx-40">
                {/* user data */}
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        username
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        email
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        createdAt
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        isAdmin
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                            {userData ? (<>{userData.map((u) => (
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {u.username ? u.username : ""}
                                        </p>
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {u.email ? u.email : ""}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {u.createdAt ? u.createdAt : ""}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {u.isAdmin ? u.isAdmin : ""}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={() => deleteUser(u._id)} class="text-gray-900 whitespace-no-wrap">
                                            delete
                                        </button>
                                    </td>
                                </tr>
                                )
                            )}</>) : (
                                <p>No data</p>
                            )}    
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* questions data */}
            </div>
        </>
    )
}