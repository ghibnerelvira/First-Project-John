import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function WorkItem({title, year, main_img, tags, id, text}) {

    return(
       
        <div className={s.work_item}>
            <img src={main_img} alt={title}/>
            <div>
                <Link to={`/work/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <div>
                    <p>{year}</p>
                    <p>{tags [0]}</p>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}