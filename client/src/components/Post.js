/* eslint-disable jsx-a11y/anchor-is-valid */
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {

    return (
        <Link to={`/post/${_id}`}>
            <article class="flex  rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 mb-10">
                <div class="hidden sm:block sm:basis-56">
                    <img src={'http://localhost:4000/' + cover} alt="" class="aspect-square h-full w-full object-cover" />
                </div>
                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-100/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6 h-full">
                        <a href="#" class="h-full flex flex-col justify-between">
                            <h3 class="font-bold uppercase text-black">
                                <Link to={`/post/${_id}`}>
                                    {title}
                                </Link>
                            </h3>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-black dark:text-gray-200">
                                <a className="author">Creator👨‍💻 {author?.username}</a>
                                <br />
                                <time>Chronicle Origin ⏳📝 {formatISO9075(new Date(createdAt))}</time>
                            </p>
                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-black dark:text-gray-200">
                                {summary}
                            </p>
                            <div class="flex justify-end">
                                <Link to={`/post/${_id}`} class="block bg-red-700 mt-3 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-yellow-500 text-pink-100 hover:text-gray-800 rounded-md">
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