import Banner from "../components/Banner"
import MyLearnings from "../components/MyLearnings"
import BrowseCourses from "../components/BrowseCourses"

export default function MyPage() {
    return (
        <>
            <Banner/>

            <div className="px-8 lg:mx-40">
                <MyLearnings/>
                <BrowseCourses/>
            </div>
        </>
    )
}