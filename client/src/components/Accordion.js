import React from 'react'

const question = [
    {
        "ques": "Can I contribute my own articles to the blog?",
        "ans": "Absolutely! We'd love to feature your articles on our blog. 📝✨ Your contributions are the heart of our community, and we can't wait to showcase your unique insights.Let's collaborate and inspire together! 💡🌟",
    },

    {
        "ques": "Are the articles suitable for beginners or just advanced developers?",
        "ans": "🌟 Whether you're a coding novice 🧑‍💻 or a seasoned pro 👩‍💻, these articles are your compass 🧭 to navigate the world of development. Crafted with simplicity and depth, they cater to all levels 📚, helping beginners take their first step and advanced devs reach new heights 🚀. Dive in and watch your skills flourish! 🌱"
    },
    {
        "ques": "How often is new content published?",
        "ans": "New content bursts forth like a cosmic symphony 🌌🎶, orchestrated by our vibrant community and tireless contributors. Updates sprinkle in like stardust, illuminating our platform's galaxy 🌠, ensuring a constantly evolving cosmos of knowledge and creativity. 🚀📚"
    },
    {
        "ques": "How can I get in touch with the authors or other community members?",
        "ans": "🌐 Connect with the authors and community members through a vibrant Discord server 🎮, an engaging Slack workspace 💬, or dive into insightful Reddit forums 📚 to spark meaningful discussions and forge new connections! 🌟"
    },
    {
        "ques": "Are there any interactive elements, like coding challenges or quizzes?",
        "ans": "Absolutely! 🚀 Our website is a dynamic playground of learning 🧠 where you'll discover a bi-weekly burst of fresh interactive content 🎮, from mind-teasing coding challenges 🕹️ to brain-tingling quizzes 🧩. Get ready to dive into a world of continuous excitement and engagement! 🌟"
    },

]

const Accordion = () => {
    return (

        <>
            <section >
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                            Unveiling the Vault of Wisdom 📚: Your Curiosities, Answered! 🌟
                        </h2>

                        <p class="hidden text-gray-500 sm:mt-4 sm:block">

                            Welcome to our "Curiously Answered Queries" section! 🤝🔍 At our digital hub, we're not just about answers, we're about evolving with YOU. 🌐💬 Your input fuels our innovation engine, leading to a symphony of user-centered improvements, ensuring a seamless journey and delightful reading experience every step of the way. 📚🎉
                        </p>
                    </div>
                </div>
            </section>
            <div class="space-y-4">
                {question.map((item, index) => (
                    <details
                        class="group rounded-lg  p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary
                            class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 "
                        >
                            <h2 class="font-bold">
                                {item.ques}
                            </h2>

                            <span class="relative h-5 w-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            {item.ans}
                        </p>
                    </details>
                ))}
            </div>
        </>
    )
}

export default Accordion