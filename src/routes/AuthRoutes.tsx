import { Routes, Route } from "react-router-dom";
import Register from "../pages/Website-Pages/Register.tsx";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AuthRoutes