import React from 'react';
import { useParams } from 'react-router-dom';
import { work_data } from '../../data/data';
import s from './index.module.css';

export default function SingleWorkPage() {
    const { work_id } = useParams();

    const singleWorkData = work_data.find(el => el.id === +work_id);
    const { full_title, year, tags, text, main_img, content } = singleWorkData;

    return (
        <section className={s.single_work_section}>
            <div className='wrapper_2'>
                <h2>{full_title}</h2>
                <div>
                    <p>{year}</p>
                    <p>{tags.join(', ')}</p>
                </div>
                <p className={s.text} >{text}</p>
                <img src={main_img} alt={full_title} />
            </div>

            <div className="wrapper_2">
                {content.map((item, index) => {
                    const [elementType, elementContent] = item;
                    switch (elementType) {
                        case 'h1':
                            return <h1 key={index}>{elementContent}</h1>;
                        case 'h2':
                            return <h4 key={index}>{elementContent}</h4>;
                        case 'img':
                            return <img key={index} src={elementContent} alt='' />;
                        case 'text':
                            return <p className={s.text} key={index}>{elementContent}</p>;
                        default:
                            return null;
                    }
                })}
            </div>
        </section>
    );
}
