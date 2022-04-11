import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";
const BlogDetails = () => {
    const { id } = useParams()
    const { Data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/dojo-blog")
        })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default BlogDetails;