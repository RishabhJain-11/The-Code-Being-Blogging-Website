import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RelatedPosts({ postId }) {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/post/${postId}/related`)
            .then((response) => response.json())
            .then((data) => setRelatedPosts(data))
            .catch((error) => {
                console.error("Error fetching related posts:", error);
            });
    }, [postId]);

    return (
        <div className="related-posts">
            <h2>Related Posts</h2>
            <ul>
                {relatedPosts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
