import React from "react";
import WorksContainer from "../../components/WorksContainer";
import { work_data } from "../../data/data";

export default function WorksPage() {
    return(
        <section>
            <div className="wrapper">
                <h1>Work</h1>
                <WorksContainer workData={work_data}/>
            </div>
        </section>
    )
}