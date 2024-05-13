import React from "react";
import AboutSection from "../../components/AboutSection";
import RecentsPostsSection from "../../components/RecentsPostsSection";
import WorksSection from "../../components/WorksSection";

export default function HomePage() {
    return(
        <div>
            <AboutSection/>
            <RecentsPostsSection/>
            <WorksSection/>
        </div>
    )
}