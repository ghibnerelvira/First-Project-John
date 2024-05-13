import React from "react";
import PostItem from "../PostItem";
import { blog_data } from "../../data/data";
import s from './index.module.css'

export default function PostsContainer() {

    const blogData = blog_data.slice(0, 2)

    return(
        <div className={s.posts_container}>
            {
                blogData.map(el => <PostItem key={el.id} {...el}/>)
            }
        </div>
    )
}