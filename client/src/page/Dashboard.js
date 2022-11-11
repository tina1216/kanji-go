import Navbar from "../components/Navbar"
import MyPage from "./MyPage"

export default function Dashboard() {
    return(
        <div className="antialiased bg-bgDashboard">
            <Navbar/>

            <MyPage/>
        </div>
    )
}