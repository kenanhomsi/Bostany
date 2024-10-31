import { Route, Routes } from "react-router-dom"
import BostanyHome from "../pages/BostanyDashboard/BostanyHome"
import Statistics from "../pages/BostanyDashboard/Statistics"
import Table from "../pages/BostanyDashboard/Table"
import Messages from "../pages/BostanyDashboard/Messages"
import Profile from "../pages/Both/Profile"
import ProfileNotification from "../components/General/ProfileNotification"
import ProfileInfo from "../components/General/ProfileInfo"
import ProfilePrevice from "../components/General/ProfilePrevice"
import ProfileHelp from "../components/General/ProfileHelp"
import ProfileAboutBostany from "../components/General/ProfileAboutBostany"
import Wallet from "../pages/Both/Wallet"

const BostanyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BostanyHome />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/table" element={<Table />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile/*" element={<Profile />} >
                <Route path="countInfo" element={<ProfileInfo />} />
                <Route path="notification" element={<ProfileNotification />} />
                <Route path="previce" element={<ProfilePrevice />} />
                <Route path="help" element={<ProfileHelp />} />
                <Route path="aboutBostany" element={<ProfileAboutBostany />} />
            </Route>
        </Routes>
    )
}

export default BostanyRoutes