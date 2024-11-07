import Footer from "../components/BaserComponent/Footer"
import NavBar from "../components/General/NavBar"
import SideBar from "../components/BaserComponent/SideBar"
import { LayoutProps } from "../Types"
import PopUpModal from "../components/General/PopUpModal"
import { CloseBst10Table, CloseBst10Time } from "../redux/Slices/PopUpSlice"
import Bst10TimePop from "../components/BostanyComponents/Bst10TimePop"
import Bst10TablePop from "../components/BostanyComponents/Bst10TablePop"

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
            <PopUpModal
                title={<p className=" text-dark text-xl font-semibold">بستن الآن</p>}
                type="Bst10Time"
                PopSize="lg"
                closeAction={CloseBst10Time}
            >
                <Bst10TimePop />
            </PopUpModal>
            <PopUpModal
                title='الجدولة'
                type="Bst10Table"
                PopSize="3xl"
                closeAction={CloseBst10Table}
            >
                <Bst10TablePop />
            </PopUpModal>
        </div>
    )
}

export default BostanyLayout