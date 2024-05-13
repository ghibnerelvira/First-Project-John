import React from 'react'
import BlogItem from '../BlogItem'
import s from './index.module.css'


export default function BlogsContainer({ blogData }) {

    return(
        <div className={s.blogs_container}>
            { blogData.map(el => <BlogItem key={el.id} {...el}/>) }
        </div>
    )
}