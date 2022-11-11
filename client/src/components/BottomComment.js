import {Link} from 'react-router-dom'


export default function BottomComment(props) {


    const deleteComment = () => {}

    return(
        <>
            <section>
                <div class="p-5 my-4 bg-white rounded-xl border border-strokeColour shadow-md">
                    <ol class="mt-3 divide-y divider-strokeColor">
                        <li>
                            <a href="#" class="items-center p-3 sm:flex hover:bg-gray-100">
                                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://via.placeholder.com/150/0000FF/" alt=""/>
                                <div>
                                    <p class="text-base font-semibold text-gray-900">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a temporibus voluptatum earum ad aliquid
                                    </p>
                                    <p class="flex text-sm font-normal">
                                        {props.comment}
                                    </p>
                                    <span class="inline-flex items-center text-xs font-normal text-gray-500">
                                        {props.user}
                                    </span>
                                    { props.deletable && <div style={{cursor: "pointer"}} onClick={deleteComment}>DELETE</div> }
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    )
}