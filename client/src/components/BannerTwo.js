import React from 'react'

const classes = [
    {
        "desc": "Unlock the digital universe's secrets through keystrokes and algorithms in the symphony of Computer Science Fundamentals – where every user wields the power of 🖥️💡!",
        "title": "Computer Science Fundamentals"
    },
    {
        "desc": "Unleash your data wizardry and craft the future with algorithms 📊🔮! Dive into the realm of Data Science and Machine Learning – your ticket to molding innovation byte by byte! 💡🚀",
        "title": "Data Science and Machine Learning"
    },
    {
        "desc": "Dive into the language palette 🎨📝, sculpting digital worlds one code stroke at a time – your masterpiece awaits in Programming Languages!",
        "title": "Programming Languages"
    },
    {
        "desc": "Code the future 🌐: Merge pixels and pipelines 🚀! Shape websites with keystrokes, while orchestrating seamless systems 👨‍💻🔧",
        "title": "Web Development and DevOps"
    },
    {
        "desc": "🔒💻 Join the digital shield! Your code + ☁️ insights = Unbreakable defense in the cyber realm. Contribute your byte-sized armor! 🛡️🌐",
        "title": "Cyber Security and Cloud Computing"
    },
    {
        "desc": "📱Shape virtual realms and mobile wonders with Android Development and Web3. Your bytes, your world – join the digital evolution! 🚀🌐",
        "title": "Android Dev and Web3"
    },
]

const BannerTwo = () => {
    return (
        <section class=" text-black">
            <div
                class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl">
                        Compose captivating chronicles across a spectrum of subjects</h2>

                    <p class="mt-4 text-black">
                        Dive into an exhilarating journey through a plethora of topics awaiting your creative touch. Your contributions have the power to paint brilliance across this canvas of diverse subjects. 🎨🌟
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {classes.map((item, index) => (
                        <p
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            href="/services/digital-campaigns"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg >

                            <h2 class="mt-4 text-xl font-bold text-black">{item.title}</h2>
                            <p class="mt-1 text-sm text-black">
                                {item.desc}
                            </p>
                        </p>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default BannerTwo
