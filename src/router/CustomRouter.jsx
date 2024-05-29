import React from "react";
import Index from "../Pages/Index";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ReadMore from "../Pages/ReadMore";

const CustomRouter = [
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/clothing-store',
        element: <Index />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/readmore/:id',
        element: <ReadMore />
    },
    {
        path: '/about',
        element: <About />
    },
]

export default CustomRouter;