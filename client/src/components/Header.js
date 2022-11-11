import logo from '../img/logo_rec.svg'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <nav className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="pt-2 w-28">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div className="hidden md:flex space-x-6 pl-24">

                        <a href="/" className="hover:text-mainPink" id="">Features</a>
                        <a href="/" className="hover:text-mainPink" id="">About Me</a>
                        <a href="/" className="hover:text-mainPink" id="">Contact</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/signin">
                            <p className="hidden md:block p-3 px-6 pt-2 text-mainBlue baseline hover:text-mainPink">Sign in</p>
                        </Link>
                        <Link to="/signup">
                            <p className="hidden md:block p-3 px-6 pt-2 text-mainBlue rounded-full bg-white baseline hover:text-white hover:bg-mainBlue outline outline-1">Sign up</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    ) 
}

export default Header

