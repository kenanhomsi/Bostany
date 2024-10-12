import BuyingCoinsPopUp from "../components/BaserComponent/BuyingCoinsPopUp"
import Footer from "../components/BaserComponent/Footer"
import NavBar from "../components/BaserComponent/NavBar"
import SideBar from "../components/BaserComponent/SideBar"
import PopUpModal from "../components/General/PopUpModal"
import { CloseBuyingCoinsPop } from "../redux/Slices/PopUpSlice"
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
            <PopUpModal
                title='شراء'
                type="BuyingCoinsPop"
                PopSize="lg"
                closeAction={CloseBuyingCoinsPop}
            >
                <BuyingCoinsPopUp />
            </PopUpModal>
        </div>
    )
}

export default BaserDashboardLayout