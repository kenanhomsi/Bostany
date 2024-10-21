import Footer from "../components/BaserComponent/Footer"
import NavBar from "../components/General/NavBar"
import SideBar from "../components/BaserComponent/SideBar"
import { LayoutProps } from "../Types"

const BostanyLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="  font-alexandria flex w-full min-h-screen">
            <SideBar DashBoard='Bostany' />
            <div className="flex flex-col group w-full h-full pr-[264px] overflow-hidden">
                <NavBar DashBoard='Bostany' />
                <main className="">
                    {children}
                </main>
                <Footer DashBoard='Bostany' />
            </div>
        </div>
    )
}

export default BostanyLayout