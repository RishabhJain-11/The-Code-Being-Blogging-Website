import React from 'react'
import logo from '../images/mainlogo.png'

const Footer = () => {
    return (
        <footer>
            <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 font-bold">
                <div class="flex justify-center text-red-600 font-extrabold underline underline-offset-8">
                    <div className="logor">
                        <img src={logo} alt="" className="nav-logo" />
                        <p to="/" className="logo">The Code Being</p>
                    </div>
                </div>

                <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">

                    Forge the industry's destiny with the hammer of your knowledge, sculpting a future that resonates with innovation. 🔨🌟
                </p>

                <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/RishabhJain-11">
                            Github
                        </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://www.linkedin.com/in/rishabhjaincodes">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://devfolio.co/@TheRishabhJain">
                            DevFolio
                        </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://twitter.com/jainRishabhTwt">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="https://www.showwcase.com/rishabhcodes">
                            Showwcase
                        </a>
                    </li>

                </ul>

                <div class="flex justify-center text-red-600 font-extrabold underline underline-offset-8">
                    <div className="logor">
                        <p className="mt-10">Made with 💖 by Rishabh Jain</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer