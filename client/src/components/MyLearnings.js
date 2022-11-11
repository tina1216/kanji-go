import Pagination from "./Pagination"

export default function MyLearnings() {
    return(
        <>
            <section class="p-3">
                <h1 class="text-2xl">
                    My Learning
                </h1>

                <ul class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightYellow text-mustard text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                easy
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>

                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightGreen text-brightGreen text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                medium
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>

                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightGreen text-brightGreen text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                medium
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>

                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightYellow text-mustard text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                easy
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>

                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightPink text-brightPink text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                hard
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>

                    <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                        <div class="h-24 mb-3">
                            <span class="bg-lightPink text-brightPink text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                hard
                            </span>
                            <p class="text-lg font-semibold">Basic Level Kanji #1</p> 
                        </div>
                    </li>
                </ul>

                <Pagination/>

            </section>
        </>
    )
}