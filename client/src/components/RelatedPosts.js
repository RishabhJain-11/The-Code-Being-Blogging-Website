import { useEffect, useState } from "react"
import Post from "../components/RelPosts";
// import Post from "../components/Post"

const RelatedPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        })
    }, []);
    return (
        <>  
            <hr />
            <h2>All Related Posts</h2>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    )
}

export default RelatedPosts