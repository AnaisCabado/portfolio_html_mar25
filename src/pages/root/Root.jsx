import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import ThemeChange from "../../components/themeChange/ThemeChange";


function Root() {
    return (
            <main>
                <Header/>
                <Outlet />
                <ThemeChange />
            </main>
    )
}

export default Root