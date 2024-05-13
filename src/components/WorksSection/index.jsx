import React, { useState, useEffect } from 'react';
import WorksContainer from '../WorksContainer';
import { work_data } from '../../data/data';
import s from './index.module.css';

export default function WorksSection() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const workData = windowWidth <= 600 ? work_data.slice(0, 1) : work_data.slice(0, 3);

    return (
        <section className={s.works_section}>
            <div className='wrapper'>
                <p className={s.first_text}>Featured works</p>
                <WorksContainer workData={workData} />
            </div>
        </section>
    );
}
