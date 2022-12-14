import logo from '../img/logo_rec.svg'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {

    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext);

    return(
        <>
        <header class="h-16 flex items-center border-b border-gray-300">
                <aside class="px-4 flex items-center justify-center">
                    <div class="pt-2 w-28">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                </aside>
                <nav class="h-full flex-1 flex items-center justify-center">
                    <ul class="h-16 flex space-x-3">
                        <li class="h-16 flex items-center border-b border-b-4 border-mainBlue">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="h-16 flex items-center border-b-2 border-transparent">
                            <Link to="/quiz">Quiz</Link>
                        </li>
                        {/* <li class="h-16 flex items-center border-b-2 border-transparent">
                            <Link to="/saved">Saved</Link>
                        </li> */}
                        <li class="h-16 flex items-center border-b border-transparent">
                            <Link to="/search">Search</Link>
                        </li>
                        <li class="h-16 flex items-center border-b-2 border-transparent">
                            <Link to="/questions">Q&A</Link>
                        </li>
                    </ul>
                </nav>

                {user && <aside class="flex items-center pr-3 space-x-3">
                    <Link to={`/profile/${user._id}`}>
                        {user.username}
                    </Link>
                   
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
        </>
    )
}

export default Navbar