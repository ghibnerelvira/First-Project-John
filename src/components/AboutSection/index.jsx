import React from "react";
import avatar from '../../media/avatar.png'
import s from './index.module.css'

export default function AboutSection() {
    return(
        <section className={s.about_section}>
            <div className="wrapper">
                <div>
                    <h1>
                        <span>Hi, I am John,</span>
                        <span>Creative Technologist</span>
                    </h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div>Download Resume</div>
                </div>
                <img src={avatar}  className={s.shadow} alt="avatar"/>
        
                        
            </div>
        </section>
    )
}