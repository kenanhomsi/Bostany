import Footer from "../components/BaserComponent/Footer"
import NavBar from "../components/BaserComponent/NavBar"
import SideBar from "../components/BaserComponent/SideBar"
import { LayoutProps } from "../Types"

const BaserDashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="  font-alexandria flex w-full min-h-screen">
            <SideBar />
            <div className="flex flex-col group w-full h-full pr-[264px] overflow-hidden">
                <NavBar />
                <main className="px-5 ">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default BaserDashboardLayout