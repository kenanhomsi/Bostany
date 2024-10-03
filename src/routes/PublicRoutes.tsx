import React from "react";
import { Routes, Route } from "react-router-dom";

import AppHome from "../pages/Website-Pages/Home.tsx";



const PublicRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppHome />} />
        </Routes>
    );
};

export default PublicRoutes;
