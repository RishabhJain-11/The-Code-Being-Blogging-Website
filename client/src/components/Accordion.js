import React from 'react'

const Accordion = () => {
    return (

        <>
            <section >
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </h2>

                        <p class="hidden text-gray-500 sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
                            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
                            consequuntur exercitationem incidunt tempora nisi?
                        </p>
                    </div>
                </div>
            </section>
            <div class="space-y-4">
                <details
                    class="group rounded-lg  p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                    >
                        <h2 class="font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>

                <details
                    class="group rounded-lg  p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                    >
                        <h2 class="font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <span class="relative h-5 w-5 shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute inset-0 opacity-100 group-open:opacity-0"
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
                                class="absolute inset-0 opacity-0 group-open:opacity-100"
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
            </div>
        </>
    )
}

export default Accordion