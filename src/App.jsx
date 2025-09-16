import {  Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import React from 'react';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />} >
                <Route index  element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Contact" element={<Contact />} />
                </Route>

        )
    )
    return (
        <RouterProvider router={router}/>

    )
}
 export default App
