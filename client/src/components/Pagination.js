

export default function Pagination() {
    return(
        <>
            <div class="flex flex-row-reverse my-6">
                <div class="flex select-none space-x-1 text-gray-600">
                    <button href="#" class="h-12 rounded-md px-4 py-2 bg-white duration-300 ease-in-out border border-strokeColour hover:bg-mainBlue hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current icon icon-tabler icon-tabler-chevron-left" viewBox="0 0 20 20" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="15 6 9 12 15 18" />
                        </svg>                        
                    </button>

                    <button href="#" class="h-12 rounded-md px-4 py-2 bg-white duration-300 ease-in-out border border-strokeColour hover:bg-mainBlue hover:text-white"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current icon icon-tabler icon-tabler-chevron-right" viewBox="0 0 20 20" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}