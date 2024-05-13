import React from "react";
import NavMenu from "../NavMenu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function Layout() {
    return(
        <div>
            <NavMenu/>
            <Outlet/>
            <Footer/>
        </div>
    )
}