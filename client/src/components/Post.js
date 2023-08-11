/* eslint-disable jsx-a11y/anchor-is-valid */
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {

    return (
        // <div className="post">
        //     <div className="image">
        //         <Link to={`/post/${_id}`}>
        //             <img src={'http://localhost:4000/' + cover} alt="" />
        //         </Link>
        //     </div>
        //     <div className="texts">
        //         <Link to={`/post/${_id}`}>
        //             <h2>{title}</h2>
        //         </Link>
        //         <p className="info">
        //             <a className="author">{author?.username}</a>
        //             <time>{formatISO9075(new Date(createdAt))}</time>
        //         </p>
        //         <p className="summary">{summary}</p>
        //     </div>
        // </div>


        <Link to={`/post/${_id}`}>
            <article class="flex bg-black transition hover:shadow-xl text-white dark:bg-gray-900 dark:shadow-gray-800/25 mb-10">
                <div class="hidden sm:block sm:basis-56">
                    <img src={'http://localhost:4000/' + cover} alt="" class="aspect-square h-full w-full object-cover" />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-100/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6 h-full">
                        <a href="#" class="h-full flex flex-col justify-between">
                            <h3 class="font-bold uppercase">
                                <Link to={`/post/${_id}`}>
                                    {title}
                                </Link>
                            </h3>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-300 dark:text-gray-200">
                                <a className="author">{author?.username}</a>
                                <br />
                                <time>{formatISO9075(new Date(createdAt))}</time>
                            </p>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-300 dark:text-gray-200">
                                {summary}
                            </p>
                            <div class="flex justify-end">
                                <Link to={`/post/${_id}`} class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-yellow-500 text-black">
                                    Read Blog
                                </Link>
                            </div>
                        </a>
                    </div>
                </div>
            </article>

        </Link>

    );
}