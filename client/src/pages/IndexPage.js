import { useEffect, useState } from "react";
import Post from "../components/Post";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import BannerTwo from "../components/BannerTwo";
import Treat from "../components/Treat";


export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // Number of posts per page
    const paginationRange = 6; // Number of pagination links to display

    useEffect(() => {
        fetch("http://localhost:4000/post")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        setCurrentPage(1); // Reset the current page to 1 when search query changes
    };

    const filteredPosts = posts.filter((post) => {
        const searchLower = searchQuery.toLowerCase();
        const titleLower = post.title.toLowerCase();
        const summaryLower = post.summary.toLowerCase();
        const authorUsernameLower = post.author?.username.toLowerCase() || ''; // Handle cases where author or username might be undefined

        return (
            titleLower.includes(searchLower) ||
            summaryLower.includes(searchLower) ||
            authorUsernameLower.includes(searchLower)
        );
    });

    const numberOfPages = Math.ceil(filteredPosts.length / postsPerPage); // Total number of pages

    const getPageNumbers = () => {
        // Calculate the range of pagination links to display
        const startPage = Math.max(currentPage - Math.floor(paginationRange / 2), 1);
        const endPage = Math.min(startPage + paginationRange - 1, numberOfPages);

        // Generate an array of page numbers within the range
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const pageNumbers = getPageNumbers();

    // Calculate the posts to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
          
            <section class=" dark:bg-gray-900 mb-5">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-10">
                    <div class=" dark:bg-gray-800 border border-red-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">

                        <h1 class="text-gray-900 dark:text-white text-2xl md:text-3xl font-extrabold mb-2">👨‍💻 Welcome to the digital library built by coders, for the coders! Explore a world of coding wisdom and innovation curated just for you. 🚀 Unfold the digital scrolls and write your code-laden destiny with us.🔥</h1>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">🚀🤖 Ignite your software wizardry and embark on a digital journey where creativity meets innovation. Dive into a realm designed exclusively for the modern-day sorcerers of code – a sanctuary where developers like you reshape the digital landscape one line at a time. 🌐👩‍💻👨‍💻 Unleash your potential and let your keystrokes create the future!</p>
                        <Treat></Treat>
                        <div className="topnav">
                            <input onChange={handleSearch} type="search" placeholder="Search for the blogs..." />
                        </div>
                    </div>
                </div>
            </section>
            
            {currentPosts.length > 0 ? (
                currentPosts.map((post) => <Post key={post.id} {...post} />)
            ) : (
                <p>No posts found.</p>
            )}

            <div className="pagination font-extrabold">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={pageNumber === currentPage ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button onClick={goToNextPage} disabled={currentPage === numberOfPages}>
                    Next
                </button>
            </div>
            <BannerTwo />
            <Accordion />
            <Footer />
        </>
    );
}
