import React from "react";
import s from './index.module.css'

export default function PostItem({title, text, tags, date}) {

    const tags_string = tags.join(', ')

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
      };
    
      const date_tranformed = formatDate(date);

    return(
        <div className={s.post_item}>
            <h3> {title} </h3>
            <div>
                <p> {date_tranformed} </p>
                <p> {tags_string} </p>
            </div>
            <p> {text} </p>
        </div>
    )
}