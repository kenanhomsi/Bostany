import { Route, Routes } from "react-router-dom"
import BaserHome from "../pages/BaserDashboard/BaserHome"
import Search from "../pages/BaserDashboard/Search"
import Seeds from "../pages/BaserDashboard/Seeds"
import Favorite from "../pages/BaserDashboard/Favorite"
import Wallet from "../pages/BaserDashboard/Wallet"

const BaserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BaserHome />} />
            <Route path="/search" element={<Search />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/wallet" element={<Wallet />} />
        </Routes>
    )
}

export default BaserRoutes