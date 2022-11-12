import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from '../api/axios';
import Navbar from "../components/Navbar"
import TopSingleQuestion from "../components/TopSingleQuestion"
import QuestionForm from "../components/QuestionForm"


export default function Questions() {

    const {questions, setQuestions} = useState({});

    useEffect(() => {
        const fetchQuestions = async () => {
          const res = await axios.get("/api/question")
          setQuestions(
            res.data.sort((q1, q2) => {
              return new Date(q2.createdAt) - new Date(q1.createdAt);
            })
          );
        };
        fetchQuestions();
      });

    return(
        <>
            <Navbar/>

            <div class="px-8 lg:mx-40">
                <section>
                    <h1 class="text-2xl font-semibold my-8">
                        Q&A
                    </h1>

                    {questions.map((q) => (
                        <TopSingleQuestion key={q._id} post={q} autoFocus={false}/>
                    ))}

                    <QuestionForm/>
                </section>
            </div>
        </>
    )
}