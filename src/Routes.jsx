import { createBrowserRouter } from "react-router-dom";

// import { AuthContext } from "./context/AuthContext";

// import CreateUser from "./pages/auth/CreateUser";
// import Register from "./pages/auth/Register";
// import Login from "./pages/auth/Login";
// import Instructions from "./pages/instructions/Instructions";
// import Layout from "./components/layout/Layout";
// import Profile from "./pages/profile/Profile";
// import Projects from "./pages/projects/Projects";
// import ProjectDetail from "./pages/projects/ProjectDetail";
// import CreateProjectForm from "./components/createProjectForm/createProjectForm";
// import RequestForm from "./pages/requestForm/RequestForm";
// import Users from "./pages/users/Users";
// import RequestDetail from "./pages/requestDetail/RequestDetail";

// import projectUtils from "./utils/projects";
// import { getUserAllProjects } from "./utils/user";
// import getUserByCookies from "./utils/cookies";
// import Credits from "./pages/credits/Credits";

import Root from "./pages/root/Root";

import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/project/:projectTitle",
                element: <Project />,
            },
        ]
    }
]);

export default router;