import Signup from './Signup'
import Signin from './Signin'
import Main from '../components/Main'
import Dashboard from './Dashboard'
import Quiz from "./Quiz"
import Saved from "./Saved"
import Search from "./Search"
import Questions from "./Questions"
import Comments from "./Comments"
import Profile from './Profile'
import Admin from "./Admin"

import { Routes, Route} from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Routes>
          <Route path="/signup" element={<Signup />} exact/>
          <Route path="/signin" element={<Signin />} exact/>
          <Route path="/" element={<Main />} exact/>
          
          <Route path="/admin" element={<Admin/>} exact/>
          <Route path="/dashboard" element={<Dashboard/>} exact/>
          <Route path="/quiz" element={<Quiz />} exact/>
          <Route path="/saved" element={<Saved />} exact/>
          <Route path="/search" element={<Search />} exact/>
          <Route path="/questions" element={<Questions />} exact/>
          <Route path="/questions/:id" element={<Comments />} exact/>
          <Route path="/profile/:id" element={<Profile />} exact/>
      </Routes>

    </>
  )
}


export default Home