import Signup from './Signup'
import Signin from './Signin'
import Main from '../components/Main'
import Dashboard from './Dashboard'
import Quiz from "./Quiz"
import Saved from "./Saved"
import Search from "./Search"
import Questions from "./Questions"
import Profile from './Profile'

import { Routes, Route} from 'react-router-dom'
import Comments from './Comments'

export const Home = () => {
  return (
    <>
      <Routes>
          <Route path="/signup" element={<Signup />} exact/>
          <Route path="/signin" element={<Signin />} exact/>
          <Route path="/" element={<Main />} exact/>
          
          {/* test */}
          <Route path="/dashboard" element={<Dashboard/>} exact/>
          <Route path="/quiz" element={<Quiz />} exact/>
          <Route path="/saved" element={<Saved />} exact/>
          <Route path="/search" element={<Search />} exact/>
          <Route path="/questions" element={<Questions />} exact/>
          <Route path="/questions/:questionId" element={<Comments />} exact/>
          <Route path="/profile" element={<Profile />} exact/>
      </Routes>

    </>
  )
}


export default Home