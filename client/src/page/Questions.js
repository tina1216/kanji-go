import { useContext } from 'react';
import {Link} from 'react-router-dom'

import Navbar from "../components/Navbar"
import QuestionForm from "../components/QuestionForm"
import { AuthContext } from '../context/AuthContext';
import fetchData from '../hook/fetchData';


export default function Questions() {
    const {user} = useContext(AuthContext);
    const { data, loading, error, reFetch } = fetchData("/api/questions")

    return(
        <>
            <Navbar/>

            <div class="px-8 lg:mx-40">
                <section>
                    <h1 class="text-2xl font-semibold my-8">
                        Q&A
                    </h1>

                    <QuestionForm/>

                    {data ? ( 
                    <> 
                    {data.map((q) => (
                      <Link to={"/questions/" + q._id}>
                        <div class="p-5 my-4 bg-white rounded-lg border border-strokeColour shadow-sm">
                          <ol class="mt-3 divide-y divider-strokeColor">
                            <li>
                              {/* <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://via.placeholder.com/150/0000FF/" alt=""/> */}
                              <div key={q._id}>
                                  <p class="text-base font-semibold text-gray-900">
                                      {q.title}
                                  </p>
                                  <p class="flex text-sm font-normal">
                                      {q.body}
                                  </p>
                                  <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                      {q.postedBy} - {q.createdAt}
                                  </span> 
                              </div>
                            </li>
                          </ol>
                        </div>
                      </Link>
                    ))} </> ) : (
                      <p>No post yet</p>
                    )}

                </section>
            </div>
        </>
    )
}