import BookingConfirmPop from "../components/BaserComponent/BookingConfirmPop"
import BookingSuccessPop from "../components/BaserComponent/BookingSuccessPop"
import BookingTimePop from "../components/BaserComponent/BookingTimePop"
import BuyingCoinsPopUp from "../components/BaserComponent/BuyingCoinsPopUp"
import Footer from "../components/BaserComponent/Footer"
import NavBar from "../components/General/NavBar"
import SideBar from "../components/BaserComponent/SideBar"
import PopUpModal from "../components/General/PopUpModal"
import { CloseBookingConfirmPop, CloseBookingSuccessPop, CloseBookingTimePop, CloseBuyingCoinsPop } from "../redux/Slices/PopUpSlice"
import { LayoutProps } from "../Types"

const BaserDashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div dir="rtl" className="  font-alexandria bg-[#FFFBFF] flex w-full min-h-screen">
            <SideBar DashBoard='Baser' />
            <div className="flex flex-col group w-full h-full pr-[264px] overflow-hidden">
                <NavBar DashBoard='Baser' />
                <main className="">
                    {children}
                </main>
                <Footer DashBoard='Baser' />
            </div>
            <PopUpModal
                title='الوقت والمدة'
                type="BookingTimePop"
                PopSize="xl"
                closeAction={CloseBookingTimePop}
            >
                <BookingTimePop />
            </PopUpModal>
            <PopUpModal
                title='بستن!'
                type="BookingConfirmPop"
                PopSize="xl"
                IsBstn={true}
                closeAction={CloseBookingConfirmPop}
            >
                <BookingConfirmPop />
            </PopUpModal>
            <PopUpModal
                title=''
                type="BookingSuccessPop"
                PopSize="xl"
                closeIconState={true}
                closeAction={CloseBookingSuccessPop}
            >
                <BookingSuccessPop />
            </PopUpModal>
            <PopUpModal
                title='شراء'
                type="BuyingCoinsPop"
                PopSize="2xl"
                closeAction={CloseBuyingCoinsPop}
            >
                <BuyingCoinsPopUp />
            </PopUpModal>
        </div>
    )
}

export default BaserDashboardLayout