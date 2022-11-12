import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import TopQuestionAtComment from "../components/TopQuestionAtComment"
import BottomComment from "../components/BottomComment"
import QuestionForm from "../components/QuestionForm"
import axios from '../api/axios';

export default function Question({question}) {



    return(
        <>
            <Navbar/>
            <div class="px-8 pb-8 lg:mx-40">

                <TopQuestionAtComment post={question}/>

                {question.comments.map((el) => {
                    return <BottomComment comment={el}/>
                })}

                <QuestionForm/>
                
            </div>
        </>
    )
}