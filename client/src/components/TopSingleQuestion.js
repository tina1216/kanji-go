import {Link} from 'react-router-dom'
import {useState} from "react"

export default function TopSingleQuestion(props) {

    const [singleQuestion, setSingleQuestion] = useState("");

    return(
        <>
            <div class="p-5 my-4 bg-white rounded-lg border border-strokeColour">
                <ol class="mt-3 divide-y divider-strokeColor">
                    <li>
                        <Link to="/questions/question" class="items-center p-3 sm:flex hover:bg-gray-100">
                            <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://via.placeholder.com/150/0000FF/" alt=""/>
                            <div>
                                <p class="text-base font-semibold text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a temporibus voluptatum earum ad aliquid
                                </p>
                                <p class="flex text-sm font-normal">
                                    "I wanted to share a webinar zeroheight Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a temporibus voluptatum earum ad aliquid"
                                </p>
                                <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                    {singleQuestion.writer.username}
                                </span> 
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/question" class="items-center p-3 sm:flex hover:bg-gray-100">
                            <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://via.placeholder.com/150/0000FF/" alt=""/>
                            <div>
                                <p class="text-base font-semibold text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a temporibus voluptatum earum ad aliquid
                                </p>
                                <p class="flex text-sm font-normal">
                                    "I wanted to share a webinar zeroheight Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a temporibus voluptatum earum ad aliquid"
                                </p>
                                <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                    username here
                                </span> 
                            </div>
                        </Link>
                    </li>
                </ol>
            </div>
        </>
    )
}