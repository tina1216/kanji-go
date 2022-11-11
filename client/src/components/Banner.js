import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export default function Banner() {

    const {user} = useContext(AuthContext)

    return(
        <section class="py-8 rounded bg-subBlue px-4 my-8">
            <h1 class="text-2xl font-bold">
                Good afternoon { user ? user.username : ""}
            </h1>
            <p class="text-gray-600">
                Here is what is happening with your projects today
            </p>
        </section>
    )
}