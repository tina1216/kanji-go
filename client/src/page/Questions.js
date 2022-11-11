import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination"
import TopSingleQuestion from "../components/TopSingleQuestion"
import {Link} from 'react-router-dom'
import QuestionForm from "../components/QuestionForm"
import {useState} from "react"

export default function Questions() {

    const [questions, setQuestions] = useState([]);

    return(
        <>
            <Navbar/>

            <div class="px-8 lg:mx-40">
                <section>
                    <h1 class="text-2xl font-semibold my-8">
                        Q&A
                    </h1>

                    {questions.map((question) => (
                        <TopSingleQuestion props={question} autoFocus={false}/>
                    ))}

                    <Pagination/>

                    <QuestionForm/>
                </section>
            </div>
        </>
    )
}