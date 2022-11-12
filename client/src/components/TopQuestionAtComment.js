import {Link} from 'react-router-dom'

export default function TopQuestionAtComment({question}) {
   
    return(
        <>
            <section>
                <div class='flex items-center justify-center'>
                    <div class="rounded-xl border border-strokeColour p-5 shadow-md bg-white">
                        <div class="flex w-full items-center justify-between border-b pb-3">
                            <div class="flex items-center space-x-3">
                                <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                                <p class="text-lg font-bold text-slate-700">{question.username}</p>
                            </div>
                            <div class="flex items-center space-x-8">
                                <time class="text-xs text-neutral-500">{question.timestamps}</time>
                            </div>
                        </div>
                
                        <div class="mt-4 mb-6">
                            <p class="mb-3 text-xl font-bold">{question.title}</p>
                            <p class="text-sm text-neutral-600">{question.body}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}