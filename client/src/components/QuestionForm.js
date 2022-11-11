import {useState} from "react"

export default function QuestionForm() {


    const sendComment = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        console.log(event.target)
    }

    return(
        <>
        
            <section>
                <div class="rounded-xl mx-auto flex flex-col text-gray-900 border border-strokeColour p-4 shadow-lg max-w-3xl">
                    <input 
                    class="form-input rounded-lg bg-gray-100 border border-strokeColour p-2 mb-4 outline-none" 
                    spellcheck="false" 
                    placeholder="Title" 
                    type="text"
                    onChange={handleChange}
                    />
                    <textarea 
                    class="form-textarea resize-none rounded-lg bg-gray-100 p-3 h-60 border border-strokeColour outline-none"
                     spellcheck="false"
                      placeholder="Describe everything about this post here"
                      onChange={handleChange}
                      ></textarea>

                    <div class="mt-2 flex flex-col w-full"> 
                        <button onClick={sendComment} class="h-10 px-5 m-2 text-white transition-colors duration-150 bg-mainBlue rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg">
                            Post
                        </button>
                    </div>
                </div>
            </section>
        
        </>
    )
}