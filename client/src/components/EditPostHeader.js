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
                        <hr className='font-bold' />
                        <h6 class="text-xl font-bold text-gray-900">
                            Craft your digital journal with a sprinkle of ✍️ contributions – your words, our canvas! Express your thoughts in the digital 🌐 realm, where every keystroke paints a unique chapter.
                        </h6>

                        <p class="mt-1.5 text-md font-semibold text-gray-500">
                            Let's edit your blog post! 🎉
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CreatePostHeader