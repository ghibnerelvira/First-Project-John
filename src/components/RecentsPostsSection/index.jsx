import React from "react";
import s from './index.module.css'
import { Link } from "react-router-dom";
import PostsContainer from "../PostsContainer";

export default function RecentsPostsSection() {
    return(
        <section className={s.recents_posts_section}>
            <div className="wrapper">
                <div>
                    <p className={s.first_text}>Recent posts</p>
                    <Link to='/blogs' className={s.view_all}>View all</Link>
                </div>

                <PostsContainer/>
            </div>
        </section>
    )
}