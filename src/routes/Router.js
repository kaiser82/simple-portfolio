import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import AboutMore from "../components/About/AboutMore";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDetails from "../components/Portfolio/ProjectDetails";
import Resume from "../components/Resume/Resume";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails />,
                loader: ({ params }) => fetch(`https://kaiser-portfolio-client.vercel.app/projects/${params.id}`)
            },
            {
                path: '/aboutmore',
                element: <AboutMore />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }

        ]
    }
])