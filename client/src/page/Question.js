import Navbar from "../components/Navbar"
import TopCommentBox from "../components/TopCommentBox"
import BottomComment from "../components/BottomComment"
import QuestionForm from "../components/QuestionForm"

export default function Question({post}) {
    
    return(
        <>
            <Navbar/>
            <div class="px-8 pb-8 lg:mx-40">
                
                <TopCommentBox post={post}/>

                <BottomComment user="Dummy User" deletable={false} title="test title" comment="Test comment" />

                <QuestionForm/>
                
            </div>
        </>
    )
}