import Memo from "../components/Memo"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"

export default function Dashboard() {
    return(
        <div className="antialiased bg-bgDashboard h-screen">
            <Navbar/>
            <Banner/>
            <Memo/>
        </div>
    )
}