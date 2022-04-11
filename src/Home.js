import BlogList from './Bloglist';
import useFetch from './useFetch';
import { useState } from 'react';
const Home = () => {
    // const { Data: Blog, isPending, error } = useFetch("http://localhost:8000/blogs");
    const [Blog, setBLog] = useState([
        {
            id:1,
            title: "Blog #1",
            content: "Content #1",
            author: "author #1"
        },
        {
            id:2,
            title: "Blog #2",
            content: "Content #2",
            author: "author #2"
        },
        {
            id:3,
            title: "Blog #3",
            content: "Content #3",
            author: "author #3"
        },
    ])
    // isPending=false
    // async function gethedata() {
    //     let data = await fetch("http://localhost:8000/blogs")
    //     console.log(data.json())
    // }

    return (
        <div className="home">
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Loading...</div>} */}
            {Blog && <BlogList blogs={Blog} title="All Blogs!" />}
            {/* <BlogList blogs={Blog.filter((Blog) => Blog.author == "Mario")} title="Mario's Blogs!" /> */}
            {/* Filter Method applied on array of objects if we return true for  an element then it keeps that element and if we return false that element is skipped */}
        </div>
    );
}

export default Home;