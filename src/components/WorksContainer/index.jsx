import React from 'react'
import WorkItem from '../WorkItem'

export default function WorksContainer({ workData }) {

    return(
        <div>
            { workData.map(el => <WorkItem key={el.id} {...el}/>) }
        </div>
    )
}