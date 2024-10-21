import checkedIcon from '/Icons/Verification-Fill.png'
import LoveIcon from '/Icons/LoveIcon.png'
import FlowerIcon from '/Icons/Flower-Fill.png'
import TreeIcon from '/Icons/Tree-Fill.png'
import WalletIcon from '/Icons/Wallet-Fill.png'
import Button_ChatIcon from '/Icons/Button_Chat.png'
import Button_BookIcon from '/Icons/Button_Book.png'
import Button_VideoIcon from '/Icons/Button_Video.png'
import { ProfileCardProps } from "../../Types"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { OpenBookingConfirmPop, OpenBookingTimePop } from '../../redux/Slices/PopUpSlice'
import { PutBookingBostanyId, PutBookingData } from '../../redux/Slices/BookingSlice'
import { useAppSelector } from '../../redux/store'
const ProfileCard = ({ CardShap, data }: ProfileCardProps) => {
    const pathname = useLocation().pathname
    const dispatch = useDispatch()
    const BookingData = useAppSelector((state) => state.booking.BookingData)
    const BookingDayFromTimeBar = useAppSelector((state) => state.booking.BookingDayFromTimeBar)
    const handleYellowCirculClick = () => {
        if (pathname != '/') {
            dispatch(OpenBookingTimePop());
            dispatch(PutBookingBostanyId(data.id))
        }
    }
    const HandleFreetimeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(PutBookingBostanyId(data.id))
        dispatch(PutBookingData({
            ...BookingData,
            SelectedDay: BookingDayFromTimeBar,
            SelectTime: e.currentTarget.id
        }))
        dispatch(OpenBookingConfirmPop());
    }
    const HandleBookingIconClick = () => {
        if (pathname != '/') {
            dispatch(OpenBookingTimePop());
            dispatch(PutBookingBostanyId(data.id))
        }
    }
    return (
        <div className={`flex  relative  bg-BaserSurface ${CardShap == 'col' ? 'flex-col 2xl:max-w-[22.6rem] max-w-[18rem]  flex-1' : ' flex-row w-full pl-3 '}  rounded-[32px] `}>
            <div className={`${CardShap == 'col' ? '' : 'p-4'}`}>
                <button onClick={handleYellowCirculClick} className={`${CardShap == 'col' ? 'top-0 right-0' : 'top-2 right-2'} w-6 h-6 z-10 rounded-full bg-GeneralWarningContainer absolute `}></button>
                <Link to={pathname != '/' ? `/Baser/bostanyProfile/${data.id}` : '/#'}>
                    <img src={data.image} alt={data.image} className={` ${CardShap == 'col' ? '2xl:w-[22.6rem] 2xl:h-[18rem] h-[14rem]  w-[18rem]' : 'w-[208px] h-[205px] rounded-2xl'} `} />
                </Link>
            </div>
            <div className={` flex w-full ${CardShap == 'col' ? 'flex-col' : ' flex-row justify-between'}  p-4`}>
                <div className={` flex flex-col ${CardShap == 'col' ? '' : 'justify-between'}  gap-4 w-full my-3 `}>
                    {/* name and special */}
                    <div className=" flex justify-between">
                        <div className={` flex ${CardShap == 'col' ? 'flex-col' : 'flex-col-reverse'}  gap-2`}>
                            <p className="flex gap-2 items-center ">
                                <span className="text-BaserOnSurfase text-xl font-semibold">{data.name}</span>
                                {data.checkMark &&
                                    <img src={checkedIcon} alt={checkedIcon} className="w-5 h-5 " />
                                }
                            </p>
                            <span className="text-dark text-sm font-medium">{data.specialization}</span>
                        </div>
                        <div className="flex flex-col  items-center cursor-pointer">
                            <img src={LoveIcon} alt={LoveIcon} className="my-0 w-[40px] h-[40px]" />
                            <span className="text-[8px] relative ">{data.likes}</span>
                        </div>
                    </div>
                    {/* ratting and BaserCount */}
                    <div className="flex gap-5">
                        <div className="flex gap-2 items-center">
                            <img src={FlowerIcon} alt={FlowerIcon} className="w-[32px] h-[32px]" />
                            <p className="text-base font-normal"><span>{data.Rate}</span>/5</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={TreeIcon} alt={TreeIcon} className="w-[32px] h-[32px]" />
                            <span>{data.BaserCount}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={WalletIcon} alt={WalletIcon} className=" w-[32px] h-[32px]" />
                            <p className="flex gap-1 text-base text-BaserTertiary"> <span>{data.Price}</span>ر.س</p>
                        </div>
                    </div>
                    {/* Free time for booking */}
                    <div className=" flex flex-wrap gap-1 w-full">
                        {data.FreeTime.map((time, index) => (
                            <button key={index} id={`${time.to!}-${time.from!}`} onClick={HandleFreetimeClick} className={`${index == 0 ? 'bg-GeneralSuccessContainer' : index == 1 ? 'bg-GeneralWarningContainer' : 'bg-BaserTertiary'}  p-2 rounded-full text-white text-xs font-medium`}><span>{time.to}:00</span>-<span>{time.from}:00</span> صباحًا </button>
                        ))}
                    </div>
                </div>
                <div className={`${CardShap == 'col' ? 'w-full' : ' self-end  left-5 absolute'}`}>
                    <div className={`${CardShap == 'col' ? 'w-full' : ' w-[252px] '}  flex h-[64px]   justify-around rounded-xl rounded-tl-sm bg-BaserSurfaceContainerHige`}>
                        <button><img className="w-14 h-14" src={Button_ChatIcon} alt={Button_ChatIcon} /></button>
                        <button onClick={HandleBookingIconClick}><img className="w-14 h-14" src={Button_BookIcon} alt={Button_BookIcon} /></button>
                        <button><img className="w-14 h-14" src={Button_VideoIcon} alt={Button_VideoIcon} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard