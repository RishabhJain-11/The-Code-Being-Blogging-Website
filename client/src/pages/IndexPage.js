import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5; // Number of posts per page
    const paginationRange = 5; // Number of pagination links to display

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
        return post.title.toLowerCase().includes(searchQuery.toLowerCase());
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
            <div className="topnav">
                <input onChange={handleSearch} type="search" placeholder="Search for the blogs..." />
            </div>

            {currentPosts.length > 0 ? (
                currentPosts.map((post) => <Post key={post.id} {...post} />)
            ) : (
                <p>No posts found.</p>
            )}

            <div className="pagination">
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
        </>
    );
}
