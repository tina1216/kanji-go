import {useContext, useState} from "react"
import { AuthContext } from '../context/AuthContext';
import axios from '../api/axios';
import fetchData from '../hook/fetchData';

export default function Memo() {

    const {user, loading} = useContext(AuthContext);
    //const { data } = fetchData(`/api/memo/${user._id}`)
    const { data, reFetch } = fetchData(`/api/memo`)
    const current = new Date();

    const [inputs, setInputs] = useState({
        memo: "",
        postedBy: user._id,
        date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
    })

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    //send the form data to a server
    const postMemo = async(event) => {
        event.preventDefault();
        try {
            await axios.post("/api/memo/createMemo", inputs)
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    //delete a memo
    const deleteMemo = async(memoId) => {
        try {
            await axios.delete(`/api/memo/${memoId}`)
            window.location.reload(false);
            return reFetch
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <section class="px-8 lg:mx-40">
                {data.postedBy === user._id ? (<>{data.map((m) => (
                    <div class="p-5 my-4 bg-white rounded-xl border border-strokeColour shadow-md">
                    <ol class="mt-3 divide-y divider-strokeColor">
                        <li>
                            <div>
                                <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                    {m.date}
                                </span>
                                <p class="text-base font-semibold text-gray-900">
                                    {m.memo}
                                </p>
                                <button onClick={() => deleteMemo(m._id)} class="flex text-sm font-normal text-gray-400">
                                    delete
                                </button>
                            </div>
                        </li>
                    </ol>
                </div>
                ))}
                </>) : (
                    <div className="px-8 lg:mx-40">
                        <p>Nothing here yet...</p>
                    </div>
                )}
            </section>

            <section>
                <div class="rounded-xl mx-auto flex flex-col text-gray-900 border border-strokeColour p-4 shadow-lg max-w-3xl">
                    <textarea 
                    class="form-textarea resize-none rounded-lg bg-gray-100 p-3 h-60 border border-strokeColour outline-none" 
                    placeholder="Make a memo..." 
                    id="memo"
                    onChange={handleChange}
                      ></textarea>

                    <div class="mt-2 flex flex-col w-full"> 
                        <button onClick={postMemo} disabled={loading} class="h-10 px-5 m-2 text-white transition-colors duration-150 bg-mainBlue rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg">
                            Add
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}