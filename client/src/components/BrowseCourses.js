import Tab from "./Tab"
import Easy from "../data/easy.json"
import Medium from "../data/medium.json"
import Hard from "../data/hard.json"


export default function BrowseCourses() {
    return(
        <>
            <section class="p-3">
                <h1 class="text-2xl">
                    Browse Courses
                </h1>

                <Tab/>

                <ul class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                    
                    { Easy.slice(0,20).map((el, i) => {
                        return(
                            <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                                <div class="h-24 mb-3">
                                    <span class="bg-lightYellow text-mustard text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                        Easy
                                    </span>
                                    <p class="text-lg font-semibold">Basic Level Kanji #{i+1}</p> 
                                </div>
                            </li>
                        )
                    })}

                    { Medium.slice(0,20).map((el, i) => {
                        return(
                            <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                                <div class="h-24 mb-3">
                                    <span class="bg-lightGreen text-brightGreen text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                      Medium
                                    </span>
                                    <p class="text-lg font-semibold">intermediate Level Kanji #{i}</p> 
                                </div>
                            </li>
                        )
                    })}

                    { Hard.slice(0,20).map((el, i) => {
                        return(
                            <li class="py-4 px-3 rounded-lg bg-white border border-strokeColour drop-shadow-sm hover:drop-shadow">
                                <div class="h-24 mb-3">
                                    <span class="bg-lightPink text-brightPink text-xs uppercase font-bold rounded-full py-1 px-4 inline-block">
                                      Hard
                                    </span>
                                    <p class="text-lg font-semibold">Advance Level Kanji #{i}</p> 
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
                
            </section>
        </>
    )
}