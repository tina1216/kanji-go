import {Link} from 'react-router-dom'


export default function BottomComment(comment) {

    // const deleteComment = () => {}
    console.log(comment)

    return(
        <>
            <section>
                <div class="p-5 my-4 bg-white rounded-xl border border-strokeColour shadow-md">
                    <ol class="mt-3 divide-y divider-strokeColor">
                        <li>
                            <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://via.placeholder.com/150/0000FF/" alt=""/>
                            <div>
                                <p class="text-base font-semibold text-gray-900">
                                    {comment.title}
                                </p>
                                <p class="flex text-sm font-normal">
                                    {comment.body}
                                </p>
                                <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                    {comment.userId ? comment.userId : comment.postedBy} - {comment.date}
                                </span>
                                {/* { props.deletable && <div style={{cursor: "pointer"}} onClick={deleteComment}>DELETE</div> } */}
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    )
}