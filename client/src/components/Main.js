import Footer from './Footer'
import Header from "./Header"

import {Link} from 'react-router-dom'

import hero from '../img/hero.svg'
import person01 from '../img/person01.svg'
import person02 from '../img/person02.svg'
import person03 from '../img/person03.svg'
import person04 from '../img/person04.svg'


const Main = () => {
    return (
        <>
            <div className="px-8 lg:mx-40">
                <Header/>
          

                <section id="hero">
                    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
                        <div className="flex flex-col mb-32 my-8 space-y-12 md:w-1/2">
                            <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </h1>
                            <p className="max-w-sm text-center text-mainBlue md:text-left">
                                Facilis iste adipisci esse possimus tempore sequi nisi!
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Link to="/signup">
                                    <p className="md:block p-3 px-6 pt-2 text-mainBlue rounded-full bg-white baseline hover:text-white hover:bg-mainBlue outline outline-1">
                                        Sign up
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img src={hero} alt=""/>
                        </div>
                    </div>
                </section>

                <section id="features">
                    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                        <div className="flex flex-col space-y-12 md:w-1/2">
                            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                                FeatureFeature Feature Feature Feature Feature Feature?
                            </h2>
                            <p className="max-w-sm text-center text-mainBlue md:text-left">
                                Lorem ipsum dolor sit amet consectetu adipisicing elit. Aliquid officia voluptatum ut dolore voluptatem explicabo, quos quia iure doloremque perferendis at delectus, corporis nemoillum expedita et dolores numquam porro!
                            </p>
                        </div>

                        <div className="flex flex-col space-y-8 md:w-1/2">
                        {/* list item 1 */}
                            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                {/* list heading */}
                                <div className="rounded-l-full bg-mainLightBlue md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mainBlue">
                                            01
                                        </div>
                                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                                            Lorem, ipsum dolor sit amet consectetur
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Lorem, ipsum dolor sit amet consectetur
                                    </h3>
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, et ab? Consectetur omnis praesentium non adipisci corrupti, laborum obcaecati distinctio alias exercitationem?
                                    </p>
                                </div>
                            </div>
                            
                            {/* list item 2 */}
                            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                {/* list heading */}
                                <div className="rounded-l-full bg-mainLightBlue md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mainBlue">
                                            02
                                        </div>
                                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                                            Lorem, ipsum dolor sit amet consectetur
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Lorem, ipsum dolor sit amet consectetur
                                    </h3>
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, et ab? Consectetur omnis praesentium non adipisci corrupti, laborum obcaecati distinctio alias exercitationem?
                                    </p>
                                </div>
                            </div>

                            {/* list item 3 */}
                            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                {/* list heading */}
                                <div className="rounded-l-full bg-mainLightBlue md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mainBlue">
                                            03
                                        </div>
                                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                                            Lorem, ipsum dolor sit amet consectetur
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </h3>
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, et ab? Consectetur omnis praesentium non adipisci corrupti, laborum obcaecati distinctio alias exercitationem?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="aboutUs">
                    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                        <h2 className="text-4xl font-bold text-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                            {/* person 1 */}
                            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-almostWhite md:w-1/3">
                                <img src={person01} alt="" className="w-16 -mt-14"/>
                                <h5 className="text-lg font-bold">
                                    Lucas Lee
                                </h5>
                                <p className="text-sm text-gray-500">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolor repudiandae dicta facere, dolore doloremque! Maiores earum, expedita officia minima aperiam recusandae autem quam aliquid quidem eligendi nemo omnis temporibus."
                                </p>
                            </div>

                            {/* person 2 */}
                            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-almostWhite md:flex md:w-1/3">
                                <img src={person02} alt="" className="w-16 -mt-14"/>
                                <h5 className="text-lg font-bold">
                                    Mohammad Firdaus
                                </h5>
                                <p className="text-sm text-gray-500">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolor repudiandae dicta facere, dolore doloremque! Maiores earum, expedita officia minima aperiam recusandae autem quam aliquid quidem eligendi nemo omnis temporibus."
                                </p>
                            </div>

                            {/* person 3 */}
                            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-almostWhite md:flex md:w-1/3">
                                <img src={person03} alt="" className="w-16 -mt-14"/>
                                <h5 className="text-lg font-bold">
                                    Chan Foong Nien Julian
                                </h5>
                                <p className="text-sm text-gray-500">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolor repudiandae dicta facere, dolore doloremque! Maiores earum, expedita officia minima aperiam recusandae autem quam aliquid quidem eligendi nemo omnis temporibus."
                                </p>
                            </div>

                            {/* person 4 */}
                            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-almostWhite md:w-1/3">
                                <img src={person04} alt="" className="w-16 -mt-14"/>
                                <h5 className="text-lg font-bold">
                                    Tina Sekiya
                                </h5>
                                <p className="text-sm text-gray-500">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolor repudiandae dicta facere, dolore doloremque! Maiores earum, expedita officia minima aperiam recusandae autem quam aliquid quidem eligendi nemo omnis temporibus."
                                </p>
                            </div>
                        </div>
                        
                        {/* button */}
                        <div className="my-16">
                            <Link to="/signup">
                                <a href="/signup" className="p-3 px-6 pt-2 text-mainBlue rounded-full bg-white baseline hover:text-white hover:bg-mainBlue outline outline-1">
                                    Get Started
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>


            <section id="cta" className="bg-mainPink">
                <div className="lg:mx-40">
                    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-12 md:py-12 md:flex-row md:space-y-0">
                        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                            Ready to dive in?Start today.
                        </h2>
            
                        <Link to="/signup" className="my-6 p-3 px-6 pt-2 text-mainPink rounded-full shadow-2xl bg-white baseline hover:text-white hover:bg-mainBlue outline outline-1">
                            Get Started
                        </Link>
                    </div>
                </div>

            </section>
            
            <Footer/>
        </>
    )

}

export default Main