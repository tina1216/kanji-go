import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination"
import {allData as kanjiData} from "../data/kanjiData.js"
import { useState } from "react"

export default function Search() {
    
    const [state, setstate] = useState({
        keyword: '',
        list: []
      })

    const handleChange = async (e) => {
        const results = kanjiData.filter(data => {
            if (e.target.value === "") {
                return data
            }
            return data.english.toLowerCase().includes(e.target.value.toLowerCase()) && data.examples.map(el => el.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        setstate({
            keyword: e.target.value,
            list: results
        })
    }
    
    return(
        <>
            <Navbar/>
            
            <div class="px-8 pb-8 lg:mx-40">
                <section>
                    <div class="flex items-center justify-center m-6">
                        <div class="w-full max-w-2xl">
                            <form>
                                <input 
                                type="search" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-strokeColour focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="Search Kanji, meaning..." 
                                value={state.keyword}
                                onChange={handleChange} />
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <section class="px-8 lg:mx-40">
                <div class=" flex items-center justify-between pb-6">
                    <div>
                        <h2 class="text-gray-600 font-semibold">Search Results</h2>
                    </div>
                </div>

                <div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Kanji & Meaning
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Onyomi
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Kunyomi
                                        </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Examples
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {(state.keyword === '' ? "" : state.list.map(result => {
                                        return <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <p class="text-gray-900 whitespace-no-wrap" key={result.kanji}>
                                                        {result.kanji}
                                                    </p>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap" key={result.english}>
                                                        {result.english}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap" key={result.onyomi}>{result.onyomi}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap" key={result.kunyomi}>
                                                {result.kunyomi}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            {result.examples !== "" ? result.examples.map(element => 
                                                    <p class="text-gray-900 whitespace-no-wrap">{element}</p>
                                            ) : " "}
                                        </td>
                                    </tr>
                                        
                                    }))}          
                                    
                                </tbody>
                            </table>
                            
                            <Pagination/>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}