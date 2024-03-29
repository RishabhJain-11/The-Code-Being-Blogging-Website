import React from 'react'

const CreatePostHeader = () => {
    return (
        <header>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="text-center sm:text-left">
                        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back, Boss!
                        </h1>
                        <hr className='font-bold'/>
                        <h6 class="text-xl font-bold text-gray-900">
                            Join the cosmic conversation! 🚀✍️ Contribute your starry insights to our celestial blogosphere and shine a light on the universe's untold tales. 🌌📝
                        </h6>

                        <p class="mt-1.5 text-md font-semibold text-gray-500">
                            Let's write a new blog post! 🎉
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CreatePostHeader