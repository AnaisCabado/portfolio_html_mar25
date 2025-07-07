import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";


function Root() {
    return (
            <main>
                <Header/>
                <Outlet />
            </main>
    )
}

export default Root