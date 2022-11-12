import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import TopQuestionAtComment from "../components/TopQuestionAtComment"
import BottomComment from "../components/BottomComment"
import axios from '../api/axios';
import CommentForm from "../components/CommentForm";
import fetchData from "../hook/fetchData"

export default function Comments({question}) {

    const { data, loading, error, reFetch } = fetchData("/api/questions/" + question._id)
    console.log(data)

    return(
        <>
            <Navbar/>
            <div class="px-8 pb-8 lg:mx-40">

                <TopQuestionAtComment props={question}/>

                {question.comments.map((el) => {
                    return <BottomComment comment={el}/>
                })}

                <CommentForm/>
                
            </div>
        </>
    )
}