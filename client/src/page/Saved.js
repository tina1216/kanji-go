import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination"
import kanjiImg from "../img/kanji_test.svg"

export default function Saved() {
    return(
        <>
            <Navbar/>

            <div class="px-8 lg:mx-40">
                <div class="flex items-center justify-between">
                    <div className="mt-6">
                        <h2 class="text-gray-600 font-semibold">Saved Kanji</h2>
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
         
            </div>
        </>
    )
}