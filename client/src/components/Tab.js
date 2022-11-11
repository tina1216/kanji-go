import {Link} from 'react-router-dom'

export default function Tab() {
    return (
        <>
            <div class="text-sm font-medium text-center text-gray-500 border-b border-strokeColour mb-6">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 text-mainBlue rounded-t-lg border-b-2 border-mainBlue active" aria-current="page">All</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Easy</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Medium</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Hard</a>
                    </li>
                </ul>
            </div>
        </>
    )
}