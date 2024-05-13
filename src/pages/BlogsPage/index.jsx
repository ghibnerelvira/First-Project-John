import React from "react";
import { blog_data } from "../../data/data";
import BlogsContainer from "../../components/BlogsContainer";

export default function BlogsPage() {
    return(
        <section>
            <div className="wrapper">
                <h1>Blog</h1>
                <BlogsContainer blogData={blog_data}/>
            </div>
        </section>
    )
}
