import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination"
import kanjiImg from "../img/kanji_test.svg"


export default function Search() {
    return(
        <>
            <Navbar/>
            
            <div class="px-8 pb-8 lg:mx-40">
                <section>
                    <form>
                        <div class="flex items-center justify-center m-6">
                            <div class="relative w-full max-w-2xl">
                                <input type="search" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-strokeColour focus:ring-blue-500 focus:border-blue-500" placeholder="Search Kanji, meaning..." required />
                                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-500 hover:bg-blue-800 focus:outline-none">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
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
                                            <i class="fa-regular fa-bookmark"></i>
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
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full" src={kanjiImg} alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        duty, work, serve
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">mu</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                tsuto, tsutomeru, tsutomaru
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full" src={kanjiImg} alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        duty, work, serve
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">mu</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                tsuto, tsutomeru, tsutomaru
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                義務（ぎむ）
                                            </p>
                                        </td>
                                    </tr>
                                    
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