import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';

import axios from '../api/axios';
import Navbar from "../components/Navbar"
import BottomComment from "../components/BottomComment"
import CommentForm from "../components/CommentForm";
import fetchData from "../hook/fetchData"
import { AuthContext } from '../context/AuthContext';

export default function Comments() {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const qId = useParams();
    const { data, loading, error, reFetch } = fetchData(`/api/questions/${qId.id}`)

    const deleteQuestion = async(e) => {
        e.preventDefault();
        try {
            await axios.delete(`/api/questions/${qId.id}`).then(navigate("/questions"))
            return reFetch
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <Navbar/>

            <div class="px-8 pb-8 lg:mx-40">
                {/* question */}
                <section>
                    <div class="mt-4 rounded-xl border border-strokeColour p-5 shadow-md bg-white">
                        <div class="flex w-full items-center justify-between border-b pb-3">
                            <div class="flex items-center space-x-3">
                                {/* <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
                                <p class="text-lg font-bold text-slate-700">{data.userId ? data.userId : data.postedBy}</p>
                            </div>
                            <div class="flex items-center space-x-8">
                                <time class="text-xs text-neutral-500">{data.date ? data.date : data.createdAt}</time>
                                
                                {data.postedBy === user._id || user.isAdmin === true ? 
                                <button onClick={deleteQuestion} class="flex text-xs font-normal text-gray-500">
                                    delete
                                </button> : ""}
                            </div>
                        </div>
                
                        <div class="mt-4 mb-6">
                            <p class="mb-3 text-xl font-bold">{data.title}</p>
                            <p class="text-sm text-neutral-600">{data.body}</p>
                        </div>
                    </div>
                </section>

                {/* comments */}
                {data.comments ? (data.comments.map((el) => {
                    if(el.body) {
                        return <BottomComment comment={el}/>
                    }
                    return ""
                })) : (<p>No comment yet</p>)}

                <CommentForm/>
                
            </div>
        </>
    )
}