import { Route, Routes } from "react-router-dom"
import BaserHome from "../pages/BaserDashboard/BaserHome"
import Search from "../pages/BaserDashboard/Search"
import Seeds from "../pages/BaserDashboard/Seeds"
import Favorite from "../pages/BaserDashboard/Favorite"
import Wallet from "../pages/Both/Wallet"
import BostanyProfile from "../pages/BaserDashboard/BostanyProfile"
import ProfileInfo from "../components/General/ProfileInfo"
import ProfileNotification from "../components/General/ProfileNotification"
import ProfilePrevice from "../components/General/ProfilePrevice"
import ProfileHelp from "../components/General/ProfileHelp"
import ProfileAboutBostany from "../components/General/ProfileAboutBostany"
import Profile from "../pages/Both/Profile"

const BaserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BaserHome />} />
            <Route path="/search" element={<Search />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/bostanyProfile/:id" element={<BostanyProfile />} />
            <Route path="/profile/*" element={<Profile />} >
                <Route path="countInfo" element={<ProfileInfo />} />
                <Route path="notification" element={<ProfileNotification />} />
                <Route path="previce" element={<ProfilePrevice />} />
                <Route path="help" element={<ProfileHelp />} />
                <Route path="aboutBostany" element={<ProfileAboutBostany />} />
            </Route>
        </Routes >
    )
}

export default BaserRoutes