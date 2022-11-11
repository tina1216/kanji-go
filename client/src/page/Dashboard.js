import Navbar from "../components/Navbar"
import MyPage from "./MyPage"
//import {useEffect} from "react"

export default function Dashboard() {

    // const history = useHistory();

    // useEffect(() => {
    //     const token = localStorage.getItem("token")
        
    //     if(token) {
    //         const user = jwt.decode(token)
    //         if(!user) {
    //             localStorage.removeItem("token")
    //             //window.location.href = "/"
    //             history.replace("/signin")
    //         }
    //     }
    // }, [])

    return(
        <div className="antialiased bg-bgDashboard">
            <Navbar/>

            <MyPage/>
        </div>
    )
}