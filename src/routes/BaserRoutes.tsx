import { Route, Routes } from "react-router-dom"
import BaserHome from "../pages/BaserDashboard/BaserHome"

const BaserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BaserHome />} />
        </Routes>
    )
}

export default BaserRoutes